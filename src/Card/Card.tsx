import React from "react";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = ({
  children,
  marginTop,
  width,
}: React.PropsWithChildren<ICardProps>): JSX.Element => {
  return (
    <div
      className={"tcl-card"}
      style={{ marginTop: marginTop, maxWidth: width }}
    >
      {children}
    </div>
  );
};
