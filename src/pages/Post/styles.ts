import styled from "styled-components";

export const ContainerPost = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;
`;

export const Info = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin-top: -60px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      text-transform: uppercase;
      text-decoration: none;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      transition: text-decoration 0.5s;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
    margin: 1.5rem 0 0.5rem;
  }
`;

export const Footer = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-subtitle"]};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const Content = styled.div`
  padding: 2.5rem;

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 1rem;
  }

  pre {
    border-radius: 2px;
    padding: 1rem;
    background-color: ${(props) => props.theme["base-post"]};
  }
`;
