// Great tutorial for Vite, React, Typescript, Vitest setup: https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07

// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "../src/App";

// Tests
describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const h1 = screen.queryByText("Hello, World!");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
