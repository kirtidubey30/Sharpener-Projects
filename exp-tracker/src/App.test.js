import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupScreen from "../src/components/SignupComp/SignupScreen";

describe("SignupScreen", () => {
  test("renders Signup form by default", () => {
    render(<SignupScreen />);

    expect(screen.getByText("SIGNUP")).toBeInTheDocument();
  });

  test("toggles to Login form when Login link is clicked", () => {
    const handleOnClickLogin = jest.fn();

    render(<SignupScreen handleOnClickLogin={handleOnClickLogin} />);
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(handleOnClickLogin).toHaveBeenCalledTimes(1);
  });
});

