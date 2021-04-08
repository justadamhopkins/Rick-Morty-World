import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  test("should render the button component", () => {
    render(<Button />);

    expect(screen.getByText("View Profile"));
  });
  test("should render the button component with custom copy", () => {
    render(<Button copy="mockCopy" />);

    expect(screen.getByText("mockCopy"));
  });
});
