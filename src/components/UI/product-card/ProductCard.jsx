// import React from "react";

// import "../../../styles/product-card.css";

// import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// const ProductCard = (props) => {
//   const { id, title, image01, price } = props.item;
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         image01,
//         price,
//       })
//     );
//   };

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img
//           src={image01}
//           alt="product-img"
//           style={{ width: "200px", height: "150px", objectFit: "cover" }}
//         />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/foods/${id}`}>{title}</Link>
//         </h5>
//         <div className=" d-flex align-items-center justify-content-between ">
//           <span className="product__price">₹{price}</span>
//           <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  // Access the specific item in the cart
  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === id)
  );

  // Add an item to the cart
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  // Remove an item from the cart
  const removeFromCart = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img
          src={image01}
          alt="product-img"
          style={{ width: "200px", height: "150px", objectFit: "cover" }}
        />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">₹{price}</span>

          {cartItem ? (
            <div className="quantity-controls d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={removeFromCart}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={addToCart}
              >
                +
              </button>
            </div>
          ) : (
            <button className="addTOCart__btn" onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
