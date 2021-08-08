import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders the Card with default styles", () => {
    const wrapper = render(<Card />);
    expect(wrapper.getByTestId("card")).toHaveStyle("height: auto");
    expect(wrapper.getByTestId("card")).toHaveStyle("margin-top: auto");
    expect(wrapper.getByTestId("card")).toHaveStyle("max-width: 100%");
  });

  it("renders the Card with a custom height", () => {
    const wrapper = render(<Card height={"50%"} />);
    expect(wrapper.getByTestId("card")).toHaveStyle("height: 50%");
  });

  it("renders the Card with a custom margin-top", () => {
    const wrapper = render(<Card marginTop={"5rem"} />);
    expect(wrapper.getByTestId("card")).toHaveStyle("margin-top: 5rem");
  });

  it("renders the Card with a custom width", () => {
    const wrapper = render(<Card width={"50%"} />);
    expect(wrapper.getByTestId("card")).toHaveStyle("max-width: 50%");
  });

  it("renders the Card and children", () => {
    const content: string = "Card content";
    const wrapper = render(<Card>{content}</Card>);

    expect(wrapper.getByText(content)).toBeInTheDocument();
  });
});
