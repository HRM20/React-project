function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
            <div>
              <h4>Follow Us</h4>
              <i class="bi bi-facebook icon"></i>
              <i class="bi bi-twitter-x icon"></i>
              <i class="bi bi-google icon"></i>
            </div>
        <div className="text-F">
            <h4>Information</h4>
            <a href="#">specials</a>
            <a href="#">New Products</a>
            <a href="#">our stores</a>
        </div>
        <div className="text-F">
            <h4>My Account</h4>
            <a href="#">My credit slips</a>
            <a href="#">My Personal info</a>
            <a href="#">My Adress</a>
        </div>
        <div className="text-F">
            <h4>Service</h4>
            <a href="#">Payment Plans</a>
            <a href="#">Shop</a>
            <a href="#">My account</a>
        </div>
      </div>
      <div className="footer-down">
        <div>
          <p>This design was inspired by Sapphire Studios Design.</p> 
        </div>
        <div className="GetEmail">
          <button className="EmailBtn">Subscribe</button>
          <input type="text" name="" id="" placeholder="Enter your email" />
        </div>
        
      {/* <p>© 2025 Developed by HRM. All rights reserved.</p>
<p>This design was inspired by Sapphire Studios Design.</p> */}
        {/* <nav class="navbar bg-body-tertiary">
</nav> */}
      </div>
    </div>
  )
}

export default Footer
