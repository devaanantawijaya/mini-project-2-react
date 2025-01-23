import { render, screen } from "@testing-library/react";
import Footer from "../../../components/Footer";

describe("Footer Component", () => {
  test("renders the footer text", () => {
    render(<Footer />);

    const footerText = screen.getByText(
      /©2024 Memberspace, Inc - All Rights Reserved/i
    );
    expect(footerText).toBeInTheDocument();
  });

  test("renders 'Terms of use' and 'Privacy policy' links", () => {
    render(<Footer />);

    const termsOfUse = screen.getByText(/Terms of use/i);
    const privacyPolicy = screen.getByText(/Privacy policy/i);

    expect(termsOfUse).toBeInTheDocument();
    expect(privacyPolicy).toBeInTheDocument();
  });

  test("renders footer with correct styling", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-black");
  });
});
