import React from "react";
import styled from "styled-components";
import { ILoadingSpinnerProps } from "../ILoadingSpinnerProps";

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

  const StyledLoadingSpinner = styled.div`
    animation: spin 1s linear infinite;
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #3c4858;
    height: 80px;
    margin: 25px auto 25px auto;
    width: 80px;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div className={className} data-testid={dataTestId} id={id}>
      <StyledLoadingSpinner />
      <p data-testid={`${dataTestId}-text`}>{text}</p>
    </div>
  );
};
