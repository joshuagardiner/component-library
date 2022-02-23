import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./Card.logic";

describe("Card", () => {
  it("renders the Card with default styles.", () => {
    const wrapper = render(<Card data-testid={"test-card"} />);
    expect(wrapper.getByTestId("test-card")).toHaveStyle("height: auto");
    expect(wrapper.getByTestId("test-card")).toHaveStyle("max-width: 100%");
  });

  it("renders the Card with a custom height.", () => {
    const wrapper = render(<Card data-testid={"test-card"} height={"50%"} />);
    expect(wrapper.getByTestId("test-card")).toHaveStyle("height: 50%");
  });

  it("renders the Card with a custom width.", () => {
    const wrapper = render(<Card data-testid={"test-card"} width={"50%"} />);
    expect(wrapper.getByTestId("test-card")).toHaveStyle("max-width: 50%");
  });

  it("renders the Card and children.", () => {
    const content: string = "Card content";
    const wrapper = render(<Card>{content}</Card>);

    expect(wrapper.getByText(content)).toBeInTheDocument();
  });
});
