import { render, screen, fireEvent } from "@testing-library/react";
import Member from "../../../pages/Member";
import { ApiUsers } from "../../../Api";
import { act } from "react-dom/test-utils";

jest.mock("../../../Api", () => ({
  ApiUsers: jest.fn(),
}));

describe("Member Component", () => {
  const mockUsers = [
    { id: 1, first_name: "John", last_name: "Doe", avatar: "avatar1.png" },
    { id: 2, first_name: "Jane", last_name: "Smith", avatar: "avatar2.png" },
  ];
  const mockApiUsers = {
    users: mockUsers,
    getUsers: jest.fn(),
    skip: 1,
    setSkip: jest.fn(),
    totalPages: { total_pages: 2 },
  };

  beforeEach(() => {
    ApiUsers.mockReturnValue(mockApiUsers);
  });

  it("should render the list of users", () => {
    render(<Member />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("should handle next and back pagination", () => {
    render(<Member />);

    const nextButton = screen.getAllByRole("button")[1];
    fireEvent.click(nextButton);

    expect(mockApiUsers.setSkip).toHaveBeenCalledWith(2);

    const backButton = screen.getAllByRole("button")[0];
    fireEvent.click(backButton);

    expect(mockApiUsers.setSkip).toHaveBeenCalledWith(0);
  });

  it("should toggle the sidebar visibility", () => {
    render(<Member />);

    const sidebar = screen.getByText("Team Members").parentElement;
    expect(sidebar).toHaveClass("-translate-x-full");

    const toggleButton = screen.getByRole("button", { hidden: true });
    fireEvent.click(toggleButton);

    expect(sidebar).not.toHaveClass("-translate-x-full");
  });

  it("should show user details when clicked", () => {
    render(<Member />);

    const firstUser = screen.getByText("John Doe");
    fireEvent.click(firstUser);

    const userDetails = screen.getByText("John Doe");

    expect(userDetails).toBeInTheDocument();
  });
});
