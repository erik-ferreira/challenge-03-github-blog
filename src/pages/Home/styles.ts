import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ContentPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`;

export const Post = styled(Link)`
  padding: 2rem;
  height: 16.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};
  border: 2px solid ${(props) => props.theme["base-post"]};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;

    h2 {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      width: 4.625rem;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    height: 6.25rem;

    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
