import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import React, { useState } from "react";
import { login, logout } from "../../redux/User/user-slice";
import { Cart } from "../Cart/Cart";

import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "User",
          email: "user@email.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            {!showCart ? "Cart" : "Continue Shopping"}
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
};
