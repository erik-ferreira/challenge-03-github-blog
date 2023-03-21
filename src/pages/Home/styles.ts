import styled from "styled-components";

export const ContentMain = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
`;

export const InfoPublications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  border-radius: 6px;
  padding: 0.75rem 1rem;

  border: 0;
  border: 1px solid ${(props) => props.theme["base-border"]};
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
