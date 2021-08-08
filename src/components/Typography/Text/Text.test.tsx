import React from "react";
import { render } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("displays the correct text for the Text component", () => {
    const wrapper = render(<Text text={"Test"} />);

    expect(wrapper.getByTestId("text").textContent).toEqual("Test");
  });
});
