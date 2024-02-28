import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0, 2);

const mockDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const cartListElement = screen.getByRole("list");

    expect(titleElement).toHaveTextContent("MyCart.");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElements = screen.getAllByRole("listitem");
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it("should remove product when remove button is clicked", () => {
    render(<Cart showCart={true} cart={[products[0]]} />);

    const removeProductButton = screen.getByTestId("RemoveProductButton");

    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
  });
});
