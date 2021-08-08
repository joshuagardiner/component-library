import React from "react";
import { render } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("displays the correct Text", () => {
    const wrapper = render(<Text text={"Test"} />);

    expect(wrapper.getByTestId("text").textContent).toEqual("Test");
  });
});
