import React from "react";
import classNames from "classnames";
import { ILoadingSpinnerProps } from "../ILoadingSpinnerProps";
import { LoadingSpinnerView } from "./LoadingSpinner.view";

/**
 * The LoadingSpinner component.
 *
 * @param props the LoadingSpinner properties.
 * @returns the LoadingSpinner component JSX.
 */
export const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (
  props: ILoadingSpinnerProps
): JSX.Element => {
  const { className, "data-testid": dataTestId, id, text } = props;
  const classes: string = classNames("tcl-loading-spinner", className);

  return (
    <LoadingSpinnerView
      {...props}
      className={classes}
      data-testid={dataTestId}
      id={id}
      text={text}
    />
  );
};

export default LoadingSpinner;
