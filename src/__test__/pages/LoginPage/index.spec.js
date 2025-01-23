import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../../../pages/Login Page";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");

describe("LoginPage Component", () => {
  it("renders login form with email and password inputs", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByPlaceholderText("myname@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("***************")).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("updates state when inputs are changed", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("myname@email.com");
    const passwordInput = screen.getByPlaceholderText("***************");

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@email.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("shows loading state and calls login API on form submission", async () => {
    axios.post.mockResolvedValueOnce({
      data: { token: "fakeToken123" },
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("myname@email.com");
    const passwordInput = screen.getByPlaceholderText("***************");
    const loginButton = screen.getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(localStorage.getItem("access_token")).toBe("fakeToken123");
      expect(screen.getByText(/login successful/i)).toBeInTheDocument();
    });
  });

  it("displays error message when login API fails", async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        data: { error: "Invalid credentials" },
      },
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("myname@email.com");
    const passwordInput = screen.getByPlaceholderText("***************");
    const loginButton = screen.getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: "wrong@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongPassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });
});
