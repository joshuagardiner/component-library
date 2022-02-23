import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "../Card/Card.logic";
import { CollectionColumn } from "../CollectionColumn/CollectionColumn.logic";

describe("CardCollectionColumn", () => {
  it("renders child Cards", () => {
    const wrapper = render(
      <CollectionColumn data-testid={"test-column-collection"}>
        <Card>One</Card>
        <Card>Two</Card>
      </CollectionColumn>
    );

    expect(wrapper.getByTestId("test-column-collection")).toBeInTheDocument();
    expect(wrapper.getByText("One")).toBeInTheDocument();
    expect(wrapper.getByText("Two")).toBeInTheDocument();
  });
});
