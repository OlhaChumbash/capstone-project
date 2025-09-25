import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders with correct text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  test("triggers onClick handler", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} data={{ id: 1 }}>Click Me</Button>);

    fireEvent.click(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledWith({ id: 1 });
  });
});
