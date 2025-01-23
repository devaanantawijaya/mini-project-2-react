import { render, screen } from "@testing-library/react";
import { CardDetailUser } from "../../../components/Card";
import { MemoryRouter } from "react-router-dom";

const mockUser = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  avatar: "path/to/avatar.jpg",
};

test("renders user card with mock data", async () => {
  render(
    <MemoryRouter>
      <CardDetailUser selectedUser={mockUser} />
    </MemoryRouter>
  );

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

  expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();

  const viewProfileButton = screen.getByText(/View Profile/i);
  expect(viewProfileButton).toBeInTheDocument();
  expect(viewProfileButton).not.toBeDisabled();
});

test("renders fallback when no user is selected", async () => {
  render(
    <MemoryRouter>
      <CardDetailUser selectedUser={null} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Member Name/i)).toBeInTheDocument();

  expect(screen.getByText(/member@email.com/i)).toBeInTheDocument();
});
