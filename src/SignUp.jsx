import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="ll-signup">
      <div className="signup">
        {/* بخش تصویر - سمت چپ */}
        <aside className="signup-img">
          <div className="topText">
            <p>Start your journey</p>
          </div>
          <div className="bottonText">
            <div className="up-text">Create Your Account</div>
            <div className="downtext">
              Join us today and unlock new opportunities.  
              Build your future with confidence.
            </div>
          </div>
        </aside>

        {/* بخش فرم - سمت راست */}
        <aside className="signup-input">
          <div className="title-text">
            <h6>Sign Up</h6>
            <p>Fill in your details to create an account</p>
          </div>
          <div>
            <div className="Email-input-login">
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="Email-input-login">
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="Enter Your Password" />
            </div>
            <div className="password-input">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" placeholder="Confirm Your Password" />
            </div>
            <div className="signup-box">
              <button>Sign Up</button>
              <button>
                <i className="fa fa-google"></i> Sign Up with Google
              </button>
            </div>
            <div className="signUp">
              Already have an account?{" "}
              <i>
                <Link to="/login">Login</Link>
              </i>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}