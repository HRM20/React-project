import { useEffect, useState } from "react";

function Card() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };


  return (
    <div className="container py-5">
      <h1 style={{ fontFamily: "BreeSerif-Regular", fontSize: "2em", padding: "1rem 1rem 2rem 1rem", borderBottom: "1px solid gray", marginBottom: "1rem" }} className="mb-4 text-center">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">Shopping cart is empty</div>
      ) : (
        <table className="table text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.img || "https://placehold.co/100x100"} className="img-thumbnail" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td><strong>${(parseFloat(item.price) * Number(item.quantity)).toFixed(2)}</strong></td>

                <td>
                  <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger btn-sm">
                    <i className="fas fa-trash-alt me-1"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* نمایش جمع کل قیمت در پایین جدول */}
      {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-success btn-lg" onClick={() => window.location.href = "/checkout"}>
            Continue & Pay
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
