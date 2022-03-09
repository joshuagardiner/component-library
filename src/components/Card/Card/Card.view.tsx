import * as React from "react";
import { ICardProps } from "../ICardProps";

/**
 * Render the Card component.
 *
 * @param props the Card properties.
 * @returns the Card component JSX.
 */
export const CardView: React.FC<ICardProps> = (
  props: React.PropsWithChildren<ICardProps>
): JSX.Element => {
  const { children, className, "data-testid": dataTestId, height, id, width } = props;

  return (
    <div className={className} data-testid={dataTestId} id={id} style={{ height, maxWidth: width }}>
      <div className="tcl-card__content">{children}</div>
    </div>
  );
};
