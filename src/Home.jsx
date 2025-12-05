import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../src/ProductList"; // مسیر رو مطابق پروژه خودت تنظیم کن
import DropdownFilter from "./DropdownFilter";
// import Spinner from "../Spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:9000/products");
        setProducts(response.data);
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
        id="watchCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-1.jpg"
              className="d-block w-100"
              alt="Watch 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxury Watch 1</h5>
              <p>Elegant design with premium quality.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-2.jpg"
              className="d-block w-100"
              alt="Watch 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxury Watch 2</h5>
              <p>Classic style with modern touch.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-3.jpg"
              className="d-block w-100"
              alt="Watch 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxury Watch 3</h5>
              <p>Timeless elegance and durability.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>
      </div>

      {/* تصاویر ثابت */}
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

      {/* لیست محصولات */}
      <ProductList loading={loading} products={products} />
      {/* <DropdownFilter /> */}
    </>
  );
};

export default Home;
