import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";

import { FaTrash } from "react-icons/fa";
import { TfiFaceSad } from "react-icons/tfi";

import * as S from "./styles";

interface CartProps {
  showCart: boolean;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>MyCart.</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <S.CartRemoveProductButton
              data-testid="RemoveProductButton"
              onClick={() => dispatch(removeProduct(product))}
            >
              <FaTrash />
            </S.CartRemoveProductButton>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      {cart.length > 0 ? (
        <>
          <S.CartTotal>Total: ${total}</S.CartTotal>
          <S.CartButtons>
            <S.ClearCartButton onClick={() => dispatch({ type: "cart/clear" })}>
              Clear Cart
            </S.ClearCartButton>
            <S.CheckoutButton>Checkout</S.CheckoutButton>
          </S.CartButtons>
        </>
      ) : (
        <S.EmptyWrapper>
          <S.CartEmpty>
            Your Shopping Cart is Empty. <TfiFaceSad />
          </S.CartEmpty>
        </S.EmptyWrapper>
      )}
    </S.Container>
  );
};
