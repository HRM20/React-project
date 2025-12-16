import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <div className="Address">
        <NavLink to="/Home">Home</NavLink>
        <span>/Contact</span>
      </div>

      {/* Contact Section */}
      <div className="contact py-4" style={{ background: "#f9f9f9" }}>
        <h4
          className="text-center mb-4"
          style={{ fontFamily: "'BreeSerif', serif" }}
        >
          CONTACT
        </h4>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-12 col-md-6 ">
            <form className="bg-white p-4 rounded-3 shadow-sm d-flex flex-column gap-3">
              <input type="text" placeholder="Name" className="form-control" />
              <input type="text" placeholder="Phone" className="form-control" />
              <input type="text" placeholder="Email" className="form-control" />
              <textarea
                placeholder="Message"
                required
                className="form-control"
              ></textarea>
              <div className="text-end submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>

          {/* Contact Address */}
          <div className="col-12 col-md-6 d-flex flex-column gap-3">
            <div className="bg-white p-3 rounded-3 shadow-sm mb-3">
              <h5>Address</h5>
              <p>
                The company name,
                <br />
                <span>Lorem ipsum dolor,</span>
                <br />
                Glasglow Dr 40 Fe 72
              </p>
            </div>

            <div className="bg-white p-3 rounded-3 shadow-sm">
              <h5>Address1</h5>
              <p>
                Tel: 1115550001
                <br />
                Fax: 190-4509-494
                <br />
                Email:{" "}
                <a href="mailto:example@email.com">contact@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
