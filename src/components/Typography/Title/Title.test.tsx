import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("displays the correct text for the Title component", () => {
    const wrapper = render(<Title text={"Test title"} />);

    expect(wrapper.getByTestId("title").textContent).toEqual("Test title");
  });
});
