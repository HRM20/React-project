import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../src/ProductList"; // مسیر رو مطابق پروژه خودت تنظیم کن
import Reviews from "./Reviews";

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

      {/* promise section */}
 <div className="our-promise py-4">
  <div className="container">
    {/* عنوان بخش */}
    <div className="promise-title mb-2">
      <h2 className="our-promise-title">Our Promise</h2>
      <p className="our-promise-subtitle">
        Trust | Honesty | Transparency
      </p>
    </div>

    {/* آیتم‌ها */}
    <div className="row g-4">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="promise-item h-100 p-3">
          <div className="promise-icon mb-2">
            <i className="bi bi-truck fs-2"></i>
          </div>
          <h4>Free Shipping</h4>
          <p>Enjoy fast, free overnight shipping on all orders.</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="promise-item h-100 p-3">
          <div className="promise-icon mb-2">
            <i className="bi bi-clock-history fs-2"></i>
          </div>
          <h4>Real Time Inventory</h4>
          <p>
            Every watch on our website is in stock and ready for sale.
            Including hourly New Arrivals.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="promise-item h-100 p-3">
          <div className="promise-icon mb-2">
            <i className="bi bi-eye fs-2"></i>
          </div>
          <h4>Full Transparency</h4>
          <p>
            We publish the buy and sell prices for all watches to honor the
            fair market value of all products.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="promise-item h-100 p-3">
          <div className="promise-icon mb-2">
            <i className="bi bi-shield-check fs-2"></i>
          </div>
          <h4>100% Authentic</h4>
          <p>All watches are 100% Authentic</p>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* why-luxury-watch */}
      <section class="why-luxury">
        <h2 class="why-title">?Why Shop at Luxury Watches</h2>
        <p class="why-subtitle">
          Trust, honesty, and transparent pricing. Luxury Watches offers the
          largest and finest selection of used, pre-owned, and vintage luxury
          watches from brands including Rolex, OMEGA, Tudor, Oris, Cartier,
          Panerai, Longines, Tissot, Breitling, Audemars Piguet, Patek Philippe,
          and more. It has become the ultimate destination for consumers looking
          to buy, sell, or trade certified pre-owned timepieces, attaining a BBB
          A+ rating, 5/5 stars in Ekomi, and has been quoted and featured in
          many of the world's leading news publications.
        </p>

        <div class="why-section">
          <h3 class="section-title">Immediate Availability</h3>
          <p>
            Unlike some competitors, all watches are in stock ready for
            immediate overnight shipping. Visit our resources page to learn more
            about the Company and its rich history. All watches are restored
            using established authorized repair shops using genuine parts.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Price and Authenticity Guarantee</h3>
          <p>
            Our online collection of pre-owned timepieces offers a wide
            selection for those with a broad range of budgets and lifestyles.
            Our catalog is vast but singular in quality and affordability.
            Luxury Watches’ strenuous process ensures the highest quality of
            used luxury watches. By focusing on luxury and integrity, our
            in-house experts can help pinpoint our customers' exact
            specifications and guide them towards a piece that perfectly
            balances style, sophistication, and timeliness. The Company
            consistently ranks as the "best place to buy a Rolex watch".
          </p>
          <p>
            We pride ourselves on buying and selling nothing but genuine, 100%
            authentic timepieces. Our in-house watch experts check and certify
            the authenticity of each and every piece so that customers are
            guaranteed to be purchasing a 100% real and genuine product.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Curated Selection</h3>
          <p>
            To best accommodate our clients we go to great lengths to ensure we
            curate a selection that falls within their budget, while still
            focusing on pieces that can truly enhance a lifestyle. We strive to
            help each client find what they are looking for. From models like
            the stainless steel Speedmaster Moonwatch, vintage Rolex, Tudor
            Black Bay, Rolex Lady Datejust, and gold Day-Date timepieces, we
            keep a large inventory on hand to ensure the best possible
            selection.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">
            Vintage and Contemporary Watch Collection
          </h3>
          <p>
            As the most trusted name in luxury watches, with the largest
            inventory on-hand and ready for immediate sale, Luxury Watches is
            the foremost destination to find the best in authentic, pre-owned
            luxury accessories. Whether on the hunt for a new pre-owned Ceramic
            No Date Submariner, a vintage Omega, a Rolex 16610, a vintage Paul
            Newman Daytona, a vintage Omega Speedmaster, or any other vintage
            luxury watch brand, Luxury Watches is your primary source to find
            the best-of-the-best in pre-owned luxury goods at unbeatable prices.
          </p>
          <p>
            We offer the full line of luxury watch models in stainless, solid
            gold, and two tone. The esteemed Rolex 116500 still sees
            considerable demand today from enthusiasts and non-enthusiasts alike
            due to its powerful design and identifying features of its
            3-register chronograph dial.
          </p>
          <p>
            We have an ever-evolving selection of men’s and women’s models, with
            some representing modern timepiece aesthetics, and others bearing
            more spirited vintage design ethos — a category that has increased
            quite significantly in terms of value and popularity over the last
            several years.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Women’s Rolex</h3>
          <p>
            Discover the elegance of Rolex for women — a timeless symbol of
            precision, luxury, and style. Our curated collection of ladies Rolex
            watches includes sought-after models like the Lady-Datejust, midsize
            Datejust, and the elegant Pearlmaster, all pre-owned and available
            in a variety of metals and dial styles. Whether you’re adding to
            your collection or searching for the perfect gift, explore our
            trusted selection of women’s Rolex watches, crafted to complement
            every woman’s unique sense of style.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Men’s Rolex</h3>
          <p>
            Explore our distinguished collection of Rolex for men, featuring
            some of the world’s most iconic timepieces. From the rugged Rolex
            Submariner and GMT-Master II to classic models like the Datejust and
            Day-Date, our inventory includes both modern and vintage Rolex
            watches for men. Whether you’re looking for a daily wear Rolex, a
            thoughtful gift, or a smart investment, browse our full lineup of
            men’s Rolex watches, available now and ready to ship.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Why Do We Specialize In Rolex Watches?</h3>
          <p>
            The brand is synonymous with style, elegance, and sophistication.
            From its humble beginnings in London in 1905, to becoming one of the
            most revered brand names in the world. The company has and will
            always remain in the upper echelon of luxury timepieces.
          </p>
          <p>
            Wearing one of these beautifully-designed wristwatches exudes a
            certain kind of style and grace unmatched in the watchmaking
            industry. Few other brand names are admired on such a broad scope,
            or so universally treasured on such an international scale.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Sell Your Rolex Watch</h3>
          <p>
            Whether you are looking to buy, trade, or sell a Rolex watch, you
            can always count on us to provide the best prices and the best
            service. Our team of experts are professionals in their field and
            will thoroughly examine your watch to arrive at the most current
            fair market valuation. We offer this level of service on all brands,
            but Rolex is our specialty.
          </p>
          <p>
            In the past 12 years, we have purchased more used, pre-owned and
            vintage watches than anyone in the industry. And we understand that
            selling your timepiece can be a daunting experience so to that end
            we offer same-day immediate payment by check or wire, and your watch
            is insured from the second it leaves your possession.
          </p>
          <p>
            Your trust is of paramount importance. We are the only retailer that
            offers transparent prices allowing our marketplace to serve as a
            "Kelly Blue Book" for used Rolex watches. Values and prices have
            significantly increased the past 5 years so it's important to sell
            your watch to a buyer that is dedicated to the brand and is up to
            date on current values. We guarantee the best buy prices and can get
            you a firm quote in less than 1 day.
          </p>
        </div>

        <div class="why-section">
          <h3 class="section-title">Luxury Watches In The News</h3>
          <p>
            The Company has been featured in many of the world's largest and
            most respected news publications including but not limited to The
            Wall Street Journal, The NY Times, CNBC, Fox News, Barrons, Forbes,
            Fortune Magazine, The Los Angeles Times, Time Magazine, TechCrunch,
            Business Insider, JCK, and more.
          </p>
          <p>
            The Company was recently ranked #129 of the fastest-growing private
            companies in America by INC 500 and The Internet Retailer Hot 100.
            Our founder & CEO Paul Altieri has been featured and interviewed by
            dozens of fashion and watch journalists over the years for his
            insight and knowledge and is widely considered one of the foremost
            experts on Rolex watches. Visit our press page to learn more.
          </p>
        </div>
      </section>

      {/* reviews section */}
      <Reviews />
    </>
  );
};

export default Home;
