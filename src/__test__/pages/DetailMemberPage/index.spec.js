import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../../../pages/Detail Page";
import axios from "axios";
import { extraDataUsers } from "../../../ExtraData";

jest.mock("axios");

jest.mock("../../../ExtraData", () => ({
  ExtraData: jest.fn(() => ({
    extraDataUsers: [
      {
        skill: "Web Developer",
        location: "Bali",
        phone: "123456789",
        birthday: "January 1, 1990",
        gender: "Male",
        rating: 8.5,
      },
    ],
  })),
}));

describe("DetailPage", () => {
  test("renders user details correctly", async () => {
    const mockUserDetail = {
      data: {
        data: {
          id: 1,
          email: "johndoe@example.com",
          first_name: "John",
          last_name: "Doe",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
      },
    };

    axios.get.mockResolvedValueOnce(mockUserDetail);

    render(
      <MemoryRouter initialEntries={["/detail/1"]}>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Web Developer")).toBeInTheDocument();
      expect(screen.getByText("Bali")).toBeInTheDocument();
      expect(screen.getByText("123456789")).toBeInTheDocument();
      expect(screen.getByText("johndoe@example.com")).toBeInTheDocument();
      expect(screen.getByText("8.5")).toBeInTheDocument();
    });

    const avatarImage = screen.getByAltText("");
    expect(avatarImage).toHaveAttribute(
      "src",
      "https://reqres.in/img/faces/1-image.jpg"
    );
  });

  test("handles API error gracefully", async () => {
    axios.get.mockRejectedValueOnce(new Error("API Error"));

    render(
      <MemoryRouter initialEntries={["/detail/1"]}>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });
});
