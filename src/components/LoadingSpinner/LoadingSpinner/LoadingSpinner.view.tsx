import React from "react";
import { ILoadingSpinnerProps } from "../ILoadingSpinnerProps";
import { StyledLoadingSpinner } from "./partials/StyledLoadingSpinner";

/**
 * Render the LoadingSpinner component.
 *
 * @param props the LoadingSpinner properties.
 * @returns the LoadingSpinner component JSX.
 */
export const LoadingSpinnerView: React.FC<ILoadingSpinnerProps> = (
  props: ILoadingSpinnerProps
): JSX.Element => {
  const { className, "data-testid": dataTestId, id, text } = props;

  return (
    <div className={className} data-testid={dataTestId} id={id}>
      <StyledLoadingSpinner />
      <p data-testid={`${dataTestId}-text`}>{text}</p>
    </div>
  );
};
