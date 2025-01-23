import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../../../pages/Home Page";

describe("HomePage Component", () => {
  it("should render Navbar component", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should display the 'Meet Our Members' section", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /meet our members/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /discover the stories, skills, and passions of our incredible members/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /let's talk!/i })
    ).toBeInTheDocument();
  });

  it("should display the 'Work Together' section", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /work together/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/collaboration is at the heart of everything we do/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /try it now/i })
    ).toBeInTheDocument();
  });

  it("should display 'Your expertise, making an impact everywhere' section", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", {
        name: /your expertise, making an impact everywhere/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /our members bring diverse skills and expertise to the table/i
      )
    ).toBeInTheDocument();
  });

  it("should display sponsor logos", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText(/our sponsors/i)).toBeInTheDocument();
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/google/i)).toBeInTheDocument();
    expect(screen.getByText(/microsoft/i)).toBeInTheDocument();
    expect(screen.getByText(/android/i)).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
