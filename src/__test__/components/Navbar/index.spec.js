import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../../components/Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders the logo and links", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logo = screen.getByTestId("medium-logo");
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByTestId("home-link");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveTextContent("Home");

    const membersLink = screen.getByTestId("members-link");
    expect(membersLink).toBeInTheDocument();
    expect(membersLink).toHaveTextContent("Members");
  });

  test("renders login button when no token", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const loginButton = screen.getByTestId("login-button");
    expect(loginButton).toBeInTheDocument();
  });

  test("renders logout button when token exists", () => {
    localStorage.setItem("access_token", "mockToken");

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoutButton = screen.getByTestId("logout-button");
    expect(logoutButton).toBeInTheDocument();
  });

  test("hamburger button should toggle mobile menu", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const hamburgerMenu = screen.getByTestId("hamburger-button");

    fireEvent.click(hamburgerMenu);

    const mobileMenu = screen.getByTestId("mobile-menu");

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).not.toHaveClass("hidden");

    const homeLink = screen.getByTestId("home-link");
    expect(homeLink).toBeInTheDocument();

    const memberLink = screen.getByTestId("members-link");
    expect(memberLink).toBeInTheDocument();
  });

  test("mobile menu is not visible initially", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const mobileMenu = screen.queryByTestId("mobile-menu");

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveClass("hidden");
  });
});
