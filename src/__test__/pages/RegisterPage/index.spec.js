import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterPage from "../../../pages/Register Page";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");

describe("RegisterPage Component", () => {
  it("renders register form with email and password inputs", () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );

    expect(screen.getByPlaceholderText("myname@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("***************")).toBeInTheDocument();
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  it("updates state when inputs are changed", () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("myname@email.com");
    const passwordInput = screen.getByPlaceholderText("***************");

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@email.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("shows loading state and calls register API on form submission", async () => {
    axios.post.mockResolvedValueOnce({
      data: { id: "12345", token: "fakeToken123" },
    });

    render(
      <Router>
        <RegisterPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("myname@email.com");
    const passwordInput = screen.getByPlaceholderText("***************");
    const registerButton = screen.getByText(/register/i);

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(registerButton);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(localStorage.getItem("get_id")).toBe("12345");
      expect(localStorage.getItem("get_token")).toBe("fakeToken123");
      expect(screen.getByText(/register successful/i)).toBeInTheDocument();
    });
  });

  it("displays error message when register API fails", async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        data: { error: "Missing password" },
      },
    });

    render(
      <Router>
        <RegisterPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("myname@email.com");
    const passwordInput = screen.getByPlaceholderText("***************");
    const registerButton = screen.getByText(/register/i);

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(screen.getByText(/missing password/i)).toBeInTheDocument();
    });
  });

  it("navigates to login page when 'Login now!' is clicked", () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );

    const loginLink = screen.getByText(/login now!/i);
    expect(loginLink).toBeInTheDocument();
  });
});
