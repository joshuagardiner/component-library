import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "../Card/Card.logic";
import { Collection } from "../Collection/Collection.logic";

describe("CardCollection", () => {
  it("renders child Cards", () => {
    const wrapper = render(
      <Collection data-testid={"test-collection"}>
        <Card>One</Card>
        <Card>Two</Card>
      </Collection>
    );

    expect(wrapper.getByTestId("test-collection")).toBeInTheDocument();
    expect(wrapper.getByText("One")).toBeInTheDocument();
    expect(wrapper.getByText("Two")).toBeInTheDocument();
  });
});
