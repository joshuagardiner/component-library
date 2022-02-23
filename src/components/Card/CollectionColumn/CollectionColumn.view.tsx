import * as React from "react";
import { ICardProps } from "../ICardProps";

/**
 * Render the component
 *
 * @param props Properties
 * @returns Component JSX
 */
export const CollectionColumnView: React.FC<ICardProps> = (
  props: React.PropsWithChildren<ICardProps>
): JSX.Element => {
  const { children } = props;

  return <div {...props}>{children}</div>;
};
