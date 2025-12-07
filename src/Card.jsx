import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Card() {
  const [cartItems, setCartItems] = useState([]);

  // تابع ادغام محصولات تکراری
  const mergeCartItems = (items) => {
    const merged = [];
    items.forEach((item) => {
      const existing = merged.find(
        (m) => m.id === item.id && m.color === item.color
      );
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        merged.push({ ...item });
      }
    });
    return merged;
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      const merged = mergeCartItems(parsed);
      setCartItems(merged);
      localStorage.setItem("cartItems", JSON.stringify(merged));
    }
  }, []);

  const updateLocalStorage = (items) => {
    const merged = mergeCartItems(items);
    setCartItems(merged);
    localStorage.setItem("cartItems", JSON.stringify(merged));
  };

  const handleRemoveItem = (itemId, color) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === itemId && item.color === color)
    );
    updateLocalStorage(updatedCart);
  };

  const handleUpdateQuantity = (itemId, color, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.color === color
        ? { ...item, quantity: newQuantity }
        : item
    );
    updateLocalStorage(updatedCart);
  };

  return (
    <div className="container py-5">
      <div className="card-address">
        <NavLink to="/Home">Home</NavLink>
        {<span>/Cart</span>}
      </div>
      <h2
        style={{
          fontFamily: "BreeSerif-Regular",
          fontSize: "2em",
          padding: "1rem 1rem 2rem 1rem",
          borderBottom: "1px solid gray",
          marginBottom: "1rem",
        }}
        className="mb-4 text-center"
      >
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Shopping cart is empty
        </div>
      ) : (
        <table className="table text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={`${item.id}-${item.color}-${index}`}>
                <td>
                  <img
                    src={item.img || "https://placehold.co/100x100"}
                    className="img-thumbnail"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.color || "-"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      handleUpdateQuantity(
                        item.id,
                        item.color,
                        item.quantity - 1
                      )
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      handleUpdateQuantity(
                        item.id,
                        item.color,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <strong>
                    $
                    {(parseFloat(item.price) * Number(item.quantity)).toFixed(
                      2
                    )}
                  </strong>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.color)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fas fa-trash-alt me-1"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-success btn-lg"
            onClick={() => (window.location.href = "/Login")}
          >
            Continue & Pay
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
