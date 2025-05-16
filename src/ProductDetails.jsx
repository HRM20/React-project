import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:9000/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cartItems");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    cartItems.push({ ...product, quantity });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setShowModal(true);
  };

  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        rel="stylesheet"
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={product.img || "https://placehold.co/250x250"}
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body">
                <div className="row g-2">
                  {product.thumbnails?.map(thumbnail => (
                    <div className="col-3" key={thumbnail}>
                      <img
                        src={thumbnail || "https://placehold.co/80x80"}
                        className="img-thumbnail"
                        alt="Thumbnail"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="h2 mb-3">{product.name || "Elegant Watch Classic Edition"}</h1>
            <div className="mb-3">
              <span className="h4 me-2">{product.price || "$299.99"}</span>
            </div>

            <p className="mb-4">
              {product.description ||
                "Timeless elegance meets modern functionality in this classic timepiece. Features premium materials, water resistance, and sophisticated design."}
            </p>

            <div className="mb-4">
              <h6 className="mb-2">Color</h6>
              <div className="btn-group" role="group">
                <input type="radio" className="btn-check" name="color" id="silver" defaultChecked />
                <label className="btn btn-outline-secondary" htmlFor="silver">Silver</label>
                <input type="radio" className="btn-check" name="color" id="gold" />
                <label className="btn btn-outline-secondary" htmlFor="gold">Gold</label>
                <input type="radio" className="btn-check" name="color" id="black" />
                <label className="btn btn-outline-secondary" htmlFor="black">Black</label>
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-4">
              <label className="mb-2" htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: "80px" }}
              />
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn btn-outline-secondary" type="button">
                <i className="far fa-heart me-2"></i>Add to Wishlist
              </button>
            </div>

            <div className="mt-4">
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-truck text-primary me-2"></i>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-undo text-primary me-2"></i>
                <span>30-day return policy</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-shield-alt text-primary me-2"></i>
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {showModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1050,
        }}>
          <div style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "20px 30px",
            textAlign: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            width: "80%",
            maxWidth: "400px",
          }}>
            <h5 style={{ marginBottom: "10px", fontWeight: "bold", color: "#333" }}>
              Product Added
            </h5>
            <p style={{ margin: 0, color: "#555" }}>
              {product.name} ({quantity}) has been successfully added to your shopping cart.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
