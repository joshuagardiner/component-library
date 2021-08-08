import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders the Card and children", () => {
    const content: string = "Card content";
    const wrapper = render(<Card>{content}</Card>);

    expect(wrapper.getByText(content)).toBeInTheDocument();
  });
});
