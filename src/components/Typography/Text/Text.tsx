import React from "react";
import { ITextProps } from "./ITextProps";

/**
 * The Text component
 *
 * @returns a body of Text
 */
export const Text: React.FC<ITextProps> = ({
  color,
  fontSize,
  lineHeight,
  marginLeft,
  marginRight,
  maxWidth,
  text,
}: ITextProps) => {
  return (
    <p
      style={{
        color: color,
        fontSize: fontSize,
        lineHeight: lineHeight,
        marginLeft: marginLeft || "auto",
        marginRight: marginRight || "auto",
        maxWidth: maxWidth,
      }}
    >
      {text}
    </p>
  );
};
