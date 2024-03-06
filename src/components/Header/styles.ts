import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #000080;

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  height: 60px;

  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 440px) {
    padding: 0 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 440px) {
    gap: 0.5rem;
  }
`;

interface AuthButtonProps {
  isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;

  background-color: ${(props) => (props.isLogged ? "#ff0000" : "#008000")};
  color: #ffffff;
  font-size: 0.8rem;

  svg {
    font-size: 0.8rem;
  }

  @media (max-width: 440px) {
    height: 35px;
    padding: 0 0.5rem;
    font-size: 0.74rem;

    svg {
      font-size: 1rem;
    }
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;

  background-color: #ee82ee;
  color: #000000;
  font-size: 0.8rem;

  svg {
    font-size: 0.8rem;
  }

  @media (max-width: 440px) {
    height: 35px;
    padding: 0 0.5rem;
    font-size: 0.74rem;

    svg {
      font-size: 1rem;
    }
  }
`;
