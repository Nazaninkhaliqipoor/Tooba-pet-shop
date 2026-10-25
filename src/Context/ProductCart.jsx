import { useContext } from "react";
import { CartContext } from "./CartProvider";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  const quantity = getProductQuantity(product.id);

  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full rounded-xl object-cover"
      />

      <h3 className="mt-3 font-bold">{product.title}</h3>

      <p className="mt-2 text-gray-600">{product.price} تومان</p>

      <div className="mt-4">
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-orange-500 px-4 py-2 text-white"
          >
            افزودن به سبد
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xl"
            >
              -
            </button>

            <span className="font-bold">{quantity}</span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xl text-white"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
