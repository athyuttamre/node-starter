import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const div = screen.getByText(/Hello, world/i);
  expect(div).toBeInTheDocument();
});
