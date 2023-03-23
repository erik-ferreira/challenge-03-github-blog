import {
  LoadingSpinnerContainer,
  LoadingSpinnerContainerProps,
} from "./styles";

interface LoadingSpinnerProps extends LoadingSpinnerContainerProps {}

export function LoadingSpinner({ size = 48 }: LoadingSpinnerProps) {
  return (
    <LoadingSpinnerContainer size={size}>
      <div className="loading-spinner" />
    </LoadingSpinnerContainer>
  );
}
