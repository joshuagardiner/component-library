import classNames from "classnames";
import React, { FC } from "react";
import { ICardProps } from "../ICardProps";
import { CollectionColumnView } from "./CollectionColumn.view";

type Props = React.PropsWithChildren<ICardProps>;

/**
 * Return the component
 *
 * @param props Properties
 * @returns Component JSX
 */
export const CollectionColumn: FC<Props> = (props: Props): JSX.Element => {
  const { children, className } = props;

  const classes: string = classNames("tcl-card-collection__column", className);

  return (
    <CollectionColumnView {...props} className={classes}>
      {children}
    </CollectionColumnView>
  );
};

export default CollectionColumn;
