import classNames from "classnames";
import React from "react";
import { ICardProps } from "../ICardProps";
import { CardView } from "./Card.view";

type Props = React.PropsWithChildren<ICardProps>;

/**
 * The Card component.
 *
 * @param props the Card properties.
 * @returns the Card component JSX.
 */
export const Card: React.FC<Props> = (props: Props): JSX.Element => {
  const { children, className, height, id, width } = props;

  const classes: string = classNames("tcl-card", className);

  return (
    <CardView
      {...props}
      className={classes}
      height={height || "auto"}
      id={id}
      width={width || "100%"}
    >
      {children}
    </CardView>
  );
};

export default Card;
