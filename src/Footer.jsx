function Footer() {
  return (
    <footer className="footer text-dark pt-4">
      <div className="container">
        {/* Footer Top */}
        <div className="row justify-content-center text-md-center text-end">
          {/* Social Media */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Follow Us</h5>
            <div className="d-flex flex-column align-items-start align-items-md-center gap-2">
              <div className="d-flex align-items-center gap-2 social-item">
                <i className="bi bi-facebook"></i>
                <span>Facebook</span>
              </div>
              <div className="d-flex align-items-center gap-2 social-item">
                <i className="bi bi-twitter"></i>
                <span>Twitter</span>
              </div>
              <div className="d-flex align-items-center gap-2 social-item">
                <i className="bi bi-google"></i>
                <span>Google</span>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Specials
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  New Products
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Our Stores
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>My Account</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  My Credit Slips
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  My Personal Info
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  My Address
                </a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Payment Plans
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-secondary" />

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-around py-3 gap-3">
          <p className="mb-0 text-center text-md-end me-md-3">
            .This design was created by HR MOHEBBI
          </p>

          <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="form-control"
            />
            <button className="footer-b-style">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
