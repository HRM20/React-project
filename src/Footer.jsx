function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="social-media-icons">
          <h4>Follow Us</h4>
          <div className="social-item">
            <i className="bi bi-facebook"></i>
            <span>Facebook</span>
          </div>
          <div className="social-item">
            <i className="bi bi-twitter-x"></i>
            <span>Twitter</span>
          </div>
          <div className="social-item">
            <i className="bi bi-google"></i>
            <span>Google</span>
          </div>
        </div>

        <div className="text-F">
          <h4>Information</h4>
          <a href="#">Specials</a>
          <a href="#">New Products</a>
          <a href="#">Our Stores</a>
        </div>
        <div className="text-F">
          <h4>My Account</h4>
          <a href="#">My Credit Slips</a>
          <a href="#">My Personal Info</a>
          <a href="#">My Address</a>
        </div>
        <div className="text-F">
          <h4>Service</h4>
          <a href="#">Payment Plans</a>
          <a href="#">Shop</a>
          <a href="#">My Account</a>
        </div>
      </div>

      <div className="footer-down">
        <div>
          <p>This design was inspired by Sapphire Studios Design.</p>
        </div>
        <div className="GetEmail">
          <button className="EmailBtn">Subscribe</button>
          <input type="text" placeholder="Enter your email" />
        </div>
      </div>
    </div>
  );
}

export default Footer;