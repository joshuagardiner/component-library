import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton.logic";

describe("IconButton", () => {
  const OLD_OPEN = global.open;

  beforeEach(() => {
    global.open = jest.fn();
  });

  afterEach(() => {
    global.open = OLD_OPEN;
    jest.clearAllMocks();
  });

  it("renders the IconButton.", () => {
    render(
      <IconButton
        data-testid={"TEST"}
        external={false}
        href={"https://www.test.com"}
        icon={IoLogoGithub}
      />
    );

    const iconButton = screen.getByTestId("TEST");

    expect(iconButton).toHaveProperty("type", "button");
  });

  it("opens a new tab when clicking the IconButton.", () => {
    render(
      <IconButton
        data-testid={"TEST"}
        external={true}
        href={"https://www.test.com"}
        icon={IoLogoGithub}
      />
    );

    const iconButton = screen.getByTestId("TEST");
    fireEvent.click(iconButton);

    expect(global.open).toHaveBeenCalledWith("https://www.test.com", "_blank");
  });

  it("open the href when clicking the IconButton.", () => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { assign: jest.fn(), origin: "https://localhost:3000" },
    });
    jest.spyOn(global.location, "assign").mockImplementation();

    render(
      <IconButton
        data-testid={"TEST"}
        external={false}
        href={"https://www.test.com"}
        icon={IoLogoGithub}
      />
    );

    const iconButton = screen.getByTestId("TEST");
    fireEvent.click(iconButton);

    expect(window.location.assign).toHaveBeenCalledWith("https://www.test.com");
  });
});
