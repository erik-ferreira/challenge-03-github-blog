import styled from "styled-components";

export const ContentMain = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;
`;

export const InfoPublications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4.5rem 0 0.75rem;

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

export const Search = styled.form`
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  flex: 1;
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

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  height: 3.125rem;
  border: 0;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.blue};
  color: ${(props) => props.theme.blue};
  background-color: transparent;
  padding: 0 1rem;
  font-weight: bold;

  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:not(:disabled):hover {
    border-color: ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const ContentPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`;
