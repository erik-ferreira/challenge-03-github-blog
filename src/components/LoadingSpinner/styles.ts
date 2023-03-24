import styled from "styled-components";

export interface LoadingSpinnerContainerProps {
  size?: number;
}

export const LoadingSpinnerContainer = styled.div<LoadingSpinnerContainerProps>`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 100%;

  .loading-spinner {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border: 2px solid ${(props) => props.theme.blue};
    border-top: 2px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    margin: 2rem auto 0;
  }
`;
