import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:9000/products");
        setProducts(response.data); // ذخیره داده‌ها در استیت
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* تصاویر محصولات */}
      <div>
        <div className="img-div">
          <div className="image-box">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/abt-1.jpg"
              alt="Image 1"
            />
            <div className="text">Nulla maximus nunc</div>
          </div>
          <div className="image-box">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/abt-2.jpg"
              alt="Image 2"
            />
            <div className="text">Mauris erat augue</div>
          </div>
          <div className="image-box">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/abt-3.jpg"
              alt="Image 3"
            />
            <div className="text">Cras elit mauris</div>
          </div>
        </div>
      </div>

      {/* نمایش محصولات یا پیام عدم وجود محصول */}
      {loading ? (
  <Spinner />
) : products.length > 0 ? (
  <div className="container">
    <div className="product-main">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div className="badge">Hot</div>
          <div className="product-tumb">
            <img
              src={product.img || "https://placehold.co/300x300)"}
              alt={product.name}
            />
          </div>
          <div className="product-details">
            <span className="product-catagory">Category</span>
            <h4>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h4>
            <p>{product.description}</p>
            <div className="product-bottom-details">
              <div className="product-price">{product.price}</div>
              <div>
                <Link to={`/product/${product.id}`} className="view-details">
                  show details
                </Link>
              </div>
              <div className="product-links">
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      border: "2px dashed #ccc",
      borderRadius: "10px",
      margin: "20px",
    }}
  >
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundImage: "url(https://placehold.co/600x400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "10px",
      }}
    ></div>
    <p
      style={{
        fontSize: "18px",
        color: "#777",
      }}
    >
      محصولی یافت نشد
    </p>
  </div>
)}

    </>
  );
};

export default Home;
