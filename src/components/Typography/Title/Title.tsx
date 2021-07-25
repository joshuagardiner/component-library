import React from "react";
import { ITitleProps } from "./ITitleProps";

/**
 * The Title component
 *
 * @returns the Title.
 */
export const Title: React.FC<ITitleProps> = ({
  color,
  fontSize,
  marginTop,
  text,
  textTransform,
}: ITitleProps) => {
  return (
    <h1
      style={{
        color: color,
        fontSize: fontSize,
        marginTop: marginTop,
        textTransform: textTransform,
      }}
    >
      {text}
    </h1>
  );
};
