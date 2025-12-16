import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="ll">
      <div className="container py-4">
        <div className="row login mx-auto">

          {/* فرم */}
          <div className="col-12 col-lg-6 login-input">
            <div className="title-text">
              <h6>Welocome Back</h6>
              <p>Enter your Email and Password to access your account</p>
            </div>

            <div>
              <div className="Email-input-login mb-3">
                <label>: Email</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>

              <div className="password-input mb-3">
                <label>: Password</label>
                <input type="password" placeholder="Enter Your Password" />
              </div>

              <div className="chick mb-3">
                <div className="forgotPass">
                  <a href="#">Forgot Password</a>
                </div>
                <div className="chickBox">
                  <label>Remember me</label>
                  <input type="checkbox" />
                </div>
              </div>

              <div className="signIn-box mb-3">
                <button className="btn btn-primary w-100">Sign In</button>
                <button className="btn btn-light w-100 border">
                  <i className="fa fa-google me-2"></i>Sign In with Google
                </button>
              </div>

              <div className="signUp text-center">
                Don't have an account? <Link to="/signUp">Sign Up</Link>
              </div>
            </div>
          </div>

          {/* عکس */}
          <div className="col-12 col-lg-6 login-img">
            <div className="topText">
              <p>a wise quote</p>
            </div>

            <div className="bottonText">
              <div className="up-text">Get Everything You Want</div>
              <div className="downtext">
                You can get Everything you want if you work hard. Trust the process and stick to the plan.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
