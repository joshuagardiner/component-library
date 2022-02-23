import classNames from "classnames";
import React from "react";
import { IIconButtonProps } from "../IIconButtonProps";
import { IconButtonView } from "./IconButton.view";

/**
 * The IconButton component.
 *
 * @returns the IconButton component JSX.
 */
export const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps): JSX.Element => {
  const { className, external, href, icon, id } = props;
  const classes: string = classNames("tcl-icon-btn", className);

  return (
    <IconButtonView
      {...props}
      className={classes}
      external={external}
      href={href}
      icon={icon}
      id={id}
    />
  );
};

export default IconButton;
