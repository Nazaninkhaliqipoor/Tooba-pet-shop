import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";

const Shops = ({ product }) => {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getProductQuantity,
  } = useContext(CartContext);

  const quantity = getProductQuantity(product.id);

  return (
    <div className="w-[300px] flex flex-wrap justify-center mt-6 border rounded-2xl p-4 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[220px] object-contain"
      />

      <h1 className="w-full text-center mt-3 font-bold">
        {product.title}
      </h1>

      {product.price && (
        <p className="w-full text-center mt-2 text-gray-600">
          {product.price} تومان
        </p>
      )}

      <div className="w-full flex justify-center mt-4">
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
          >
            افزودن به سبد
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="w-9 h-9 rounded-full bg-gray-200 text-xl flex items-center justify-center hover:bg-gray-300"
            >
              -
            </button>

            <span className="font-bold text-lg min-w-6 text-center">
              {quantity}
            </span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="w-9 h-9 rounded-full bg-orange-500 text-white text-xl flex items-center justify-center hover:bg-orange-600"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shops;
