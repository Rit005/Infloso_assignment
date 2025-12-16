import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Login Component", () => {

  test("renders login form correctly", () => {
    renderWithRouter(<Login />);

    expect(screen.getByText(/melodyverse/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  test("shows error when submitting empty form", () => {
    renderWithRouter(<Login />);

    fireEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(
      screen.getByText(/required/i)
    ).toBeInTheDocument();
  });

});
