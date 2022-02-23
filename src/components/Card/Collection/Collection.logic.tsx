import classNames from "classnames";
import React, { FC } from "react";
import { ICardProps } from "../ICardProps";
import { CollectionView } from "./Collection.view";

type Props = React.PropsWithChildren<ICardProps>;

/**
 * Return the component
 *
 * @param props Properties
 * @returns Component JSX
 */
export const Collection: FC<Props> = (props: Props): JSX.Element => {
  const { children, className } = props;

  const classes: string = classNames("tcl-card-collection", className);

  return (
    <CollectionView {...props} className={classes}>
      {children}
    </CollectionView>
  );
};

export default CollectionView;
