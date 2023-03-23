import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled(Link)`
  padding: 2rem;
  max-height: 16.25rem;
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

    h2 {
      flex: 1;
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
    margin-top: 1rem;

    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box !important;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;
