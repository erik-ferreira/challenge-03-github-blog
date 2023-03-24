import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin-top: -3.75rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;

  img {
    width: 9.125rem;
    height: 9.125rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;

    img {
      margin: 0 auto;
    }
  }
`;

export const ProfileContent = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-weight: bold;
      font-size: 1.5rem;
    }

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

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 1.6;
    margin-top: 0.5rem;
  }
`;

export const Info = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.75rem;

  @media screen and (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
  }

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
