import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}
export const Container = styled.aside<ContainerProps>`
  position: fixed;
  z-index: 1;
  top: 60px;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 350px;
  height: 100vh;
  background-color: #ffffff;

  padding: 1.5rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.6s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li``;

export const CartRemoveProductButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 0.3rem;
  margin-top: 0.5rem;

  svg {
    font-size: 1rem;

    &:hover {
      filter: brightness(1.2);
      transition: filter 0.3s;
    }
  }
`;

export const CartTotal = styled.strong``;

export const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;
`;

export const ClearCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;

  background-color: #ee82ee;
  color: #000000;
  font-size: 0.8rem;
`;

export const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;

  background-color: #0000ff;
  color: #ffffff;
  font-size: 0.8rem;
`;

export const EmptyWrapper = styled.div`
  display: block;
  margin: auto;
`;

export const CartEmpty = styled.h3`
  text-align: center;

  svg {
    font-size: 3rem;
    margin: 1rem 0;
  }
`;
