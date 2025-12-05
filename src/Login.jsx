import { Link } from "react-router-dom";

export default function login() {
  return (
    <div className="ll">
      <div className="login">
        <aside className="login-input">
          <div className="title-text">
            <h6>Welocome Back</h6>
            <p>Enter your Email and Password to access you account</p>
          </div>
          <div>
            <div className="Email-input-login">
              <label htmlFor="email">: Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="password-input">
              <label htmlFor="password">: Password</label>
              <input type="password" placeholder="Enter Your Password" />
            </div>
            <div className="chick">
              <div className="forgotPass">
                <a href="#">Forgot Password</a>
              </div>
              <div className="chickBox">
                <label htmlFor="chickBox">Remember me</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="signIn-box">
              <button>sign In</button>
              <button>
                <i className="fa fa-google"></i>sign In with Google
              </button>
            </div>
            <div className="signUp">
              Don't have an account ?{" "}
              <i>
                <Link to="/signUp">Sign Up</Link>
              </i>
            </div>
          </div>
        </aside>
        <aside class="login-img">
          <div className="topText">
            <p>a wise quote</p>
          </div>
          <div className="bottonText">
            <div className="up-text">Get Everything You Want</div>
            <div className="downtext">
              you can get Everything you want if you work hard. trust the
              process and stick to the plan
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
