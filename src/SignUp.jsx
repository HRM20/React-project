import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="ll-signup d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row signup mx-auto">

          {/* تصویر */}
          <div className="col-12 col-lg-6 signup-img d-flex flex-column justify-content-between p-4">
            <p className="fw-semibold fs-5">Start your journey</p>

            <div>
              <h3 className="text-white">Create Your Account</h3>
              <p className="small opacity-75">
                Join us today and unlock new opportunities.  
                Build your future with confidence.
              </p>
            </div>
          </div>

          {/* فرم */}
          <div className="col-12 col-lg-6 signup-input p-4">
            <div className="title-text text-center mb-4">
              <h6 className="title">Sign Up</h6>
              <p className="subtitle">Fill in your details to create an account</p>
            </div>

            <div className="mb-3 text-start">
              <label>: Name</label>
              <input type="text" className="form-control bg-light text-start" placeholder="Enter Your Name" />
            </div>

            <div className="mb-3 text-start">
              <label>: Email</label>
              <input type="email" className="form-control bg-light text-start" placeholder="Enter Your Email" />
            </div>

            <div className="mb-3 text-start">
              <label>: Password</label>
              <input type="password" className="form-control bg-light text-start" placeholder="Enter Your Password" />
            </div>

            <div className="mb-3 text-start">
              <label>: Confirm Password</label>
              <input type="password" className="form-control bg-light text-start" placeholder="Confirm Your Password" />
            </div>

            <div className="signup-box d-flex flex-column gap-2 mb-4">
              <button className="w-100">Sign Up</button>
              <button className="btn btn-light border w-100">
                <i className="fa fa-google me-2"></i>Sign Up with Google
              </button>
            </div>

            <p className="text-center small">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
