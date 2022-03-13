import styled from "styled-components";

/**
 * The styles to applied to the LoadingSpinner.
 */
export const StyledLoadingSpinner = styled.div`
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
