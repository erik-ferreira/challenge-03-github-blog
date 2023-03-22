import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled(Link)`
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
