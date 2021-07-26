import React from "react";
import { IIconButtonProps } from "./IIconButtonProps";

/**
 * The IconButton component
 *
 * @returns the IconButton component JSX
 */
export const IconButton: React.FC<IIconButtonProps> = ({
  color,
  "data-testid": dataTestId,
  external,
  height,
  href,
  icon,
  width,
}: IIconButtonProps) => {
  const Icon = icon;
  return (
    <>
      <button
        className={"tcl-icon-btn"}
        data-testid={"icon-btn-" + dataTestId}
        style={{
          backgroundColor: "inherit",
          border: "none",
          borderRadius: "50%",
        }}
        type="button"
        onClick={(e) => {
          external ? window.open(href, "_blank") : window.location.assign(href);
        }}
      >
        <Icon
          style={{
            color: color,
            height: height,
            width: width,
          }}
          color={color}
        />
      </button>
    </>
  );
};
