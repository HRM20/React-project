import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import DropdownFilter from "./DropdownFilter";

const ProductList = ({ loading, products }) => {
  if (loading) return <Spinner />;

  if (products.length === 0) {
    return (
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
        <p style={{ fontSize: "18px", color: "#777" }}>!! No products found</p>
      </div>
    );
  }

  const renderCategory = (categoryName, products) => (
    <div className="category-section">
      {/* نام کتگوری */}
      <div className="category-name">{categoryName}</div>

      <div className="main-box-products">
        {/* محصولات */}
        <div className="product-main">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="badge">Hot</div>
              <div className="product-tumb">
                <img
                  src={product.img || "https://placehold.co/300x300"}
                  alt={product.name}
                />
              </div>
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h4>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h4>
                <p>{product.description}</p>
                <div className="product-bottom-details">
                   <div className="product-links">
                    <a href="#">
                      <i className="bi bi-heart"></i>
                    </a>
                  </div>
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      className="view-details"
                    >
                      show details
                    </Link>
                  </div>
                 
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* فیلتر مخصوص کتگوری */}
        <div className="dropdown-filter">
          <DropdownFilter />
        </div>
      </div>
    </div>
  );

  return (
    <div className="products-box">
      {renderCategory("MEN", products)}
      {renderCategory("WOMEN", products)}
    </div>
  );
};

export default ProductList;
