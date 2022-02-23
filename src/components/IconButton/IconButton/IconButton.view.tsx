import React from "react";
import { IIconButtonProps } from "../IIconButtonProps";

/**
 * Render the IconButton component.
 *
 * @param props the IconButton properties.
 * @returns the IconButton component JSX.
 */
export const IconButtonView: React.FC<IIconButtonProps> = (
  props: IIconButtonProps
): JSX.Element => {
  const {
    className,
    "data-testid": dataTestId,
    external,
    href,
    icon,
    id,
  } = props;
  const Icon = icon;

  return (
    <button
      className={className}
      data-testid={dataTestId}
      type={"button"}
      id={id}
      onClick={(e) => {
        external ? window.open(href, "_blank") : window.location.assign(href);
      }}
    >
      <Icon />
    </button>
  );
};
