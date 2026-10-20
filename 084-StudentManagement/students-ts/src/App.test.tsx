import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import App from "./App";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("App", () => {
  const mockStudents = [
    {
      id: 1,
      attributes: {
        name: "John Doe",
        age: 20,
        gender: "Male",
        address: "123 Main St",
      },
    },
    {
      id: 2,
      attributes: {
        name: "Jane Smith",
        age: 22,
        gender: "Female",
        address: "456 Oak Ave",
      },
    },
  ];

  const mockApiResponse = {
    data: mockStudents,
    success: true,
    message: null,
  };
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  describe("Fetch Students", () => {
    it("fetches students from API and succeed", async () => {
      // arrange
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      });

      // act
      render(<App />);

      // assert
      expect(await screen.findByText("John Doe")).toBeInTheDocument();
    });

    it("shows error message when fetch fails", async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error")
      );

      render(<App />);

      expect(screen.getByText("Loading...")).toBeInTheDocument();

      // Wait for error to be displayed
      await waitFor(() => {
        expect(screen.getByText("Network error")).toBeInTheDocument();
      });

      // Ensure student table is not rendered
      expect(screen.queryByText("Student Table")).not.toBeInTheDocument();
    });

    it("should show student table when fetch succeeds", async () => {
      // arrange
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      });

      // act
      render(<App />);

      // assert
      await waitFor(() => {
        expect(screen.getByText("Student Table")).toBeInTheDocument();
      });
    });

    it("should fetch students when refresh button is clicked", async () => {
      // arrange
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      });

      // act
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "Refresh" }));

      // assert
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      });
    });
  });
});
