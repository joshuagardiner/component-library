import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner.logic";

describe("LoadingSpinner", () => {
  it("should render the LoadingSpinner component correctly.", () => {
    render(<LoadingSpinner data-testid={"loading-spinner"} text={"TEST"} />);
    expect(screen.getByTestId("loading-spinner-text").textContent).toEqual("TEST");
  });
});
