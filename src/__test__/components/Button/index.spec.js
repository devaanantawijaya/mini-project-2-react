import Button from "../../../components/Button";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Button Component", () => {
  it("should render the button with the correct title", () => {
    render(<Button title="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should call onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click Me" onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("should be disabled when disable prop is true", () => {
    render(<Button title="Click Me" disable={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should apply custom class names based on props", () => {
    const { container } = render(
      <Button title="Custom" bg="bg-blue-500" w="full" />
    );
    const button = container.querySelector("button");
    screen.debug();

    expect(button.className).toContain("bg-blue-500");
    expect(button.className).toContain("w-full");
  });

  it("should match snapshot", () => {
    const { container } = render(<Button title="Snapshot Test" />);
    expect(container).toMatchSnapshot();
  });
});
