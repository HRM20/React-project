import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Card() {
  const [cartItems, setCartItems] = useState([]);

  // Merge same items
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

  // تبدیل قیمت به عدد — جلوگیری از NaN
  const getPriceNumber = (price) => {
    if (!price) return 0;
    return parseFloat(price.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <div className="card-address d-flex align-items-center gap-2">
        <NavLink to="/Home">
          Home
        </NavLink>
        <span>/ Cart</span>
      </div>

      <h2
        className="py-3 border-bottom mb-4 text-center"
        style={{ fontFamily: "BreeSerif-Regular" }}
      >
        Shopping Cart
      </h2>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="row justify-content-center align-items-center text-center mt-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="./src/img/Realistic empty supermarket shopping cart isolated on white _ Premium Vector.jpg"
              className="img-fluid"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>
              Your cart is empty
            </h5>

            <p className="text-muted mb-4">
              Looks like you haven’t added anything yet. Browse products to get
              started.
            </p>

            <Link to="/home" className="product-btn w-100 py-2">
              View Products
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* DESKTOP TABLE */}
          <div className="table-responsive d-none d-md-block">
            <table className="table text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => {
                  const price = getPriceNumber(item.price);
                  return (
                    <tr key={`${item.id}-${item.color}-${index}`}>
                      <td>
                        <img
                          src={item.img}
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
                        <div className="d-flex justify-content-center align-items-center">
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
                        </div>
                      </td>

                      <td>${price}</td>

                      <td>
                        <strong>${(price * item.quantity).toFixed(2)}</strong>
                      </td>

                      <td>
                        <button
                          onClick={() => handleRemoveItem(item.id, item.color)}
                          className="btn btn-danger btn-sm"
                        >
                          <i className="fas fa-trash-alt me-1" /> Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* MOBILE — HORIZONTAL SCROLL */}
          <div
            className="d-md-none"
            style={{
              overflowX: "auto",
              display: "flex",
              gap: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {cartItems.map((item, index) => {
              const price = getPriceNumber(item.price);

              return (
                <div
                  className="card shadow-sm p-3"
                  key={`${item.id}-${item.color}-${index}`}
                  style={{ minWidth: "280px" }}
                >
                  <img
                    src={item.img}
                    className="rounded mb-2"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />

                  <h6 className="fw-bold mt-2">{item.name}</h6>
                  <p className="text-muted m-0">Color: {item.color}</p>

                  <div className="d-flex align-items-center mt-2">
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
                  </div>

                  <strong className="d-block mt-2">
                    Total: ${(price * item.quantity).toFixed(2)}
                  </strong>

                  <button
                    onClick={() => handleRemoveItem(item.id, item.color)}
                    className="btn btn-danger btn-sm mt-2 w-100"
                  >
                    <i className="fas fa-trash-alt me-1" /> Delete
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-success btn-lg px-4"
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
