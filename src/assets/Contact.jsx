import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div style={{width : "100%"}}>
  <div className='Address'>
    <NavLink to="/Home">Home</NavLink>{<span>/Contact</span>}
  </div>
  <div className="contact">
    <h4>CONTACT</h4>
    <div className="contact-text">
    <div class="col-md-9 contact-right">
						<form>
							<input type="text" placeholder="Name" />
							<input type="text" placeholder="Phone" />
							<input type="text" placeholder="Email" />
							<textarea placeholder="Message" required=""></textarea>
							<div class="submit-btn">
								<input type="submit" value="SUBMIT" />
							</div>
						</form>
					</div>
    <div class="col-md-3 contact-left">
						<div class="address">
							<h5>Address</h5>
							<p>The company name, 
							<span>Lorem ipsum dolor,</span>
							Glasglow Dr 40 Fe 72.</p>
						</div>
						<div class="address">
							<h5>Address1</h5>
							<p>Tel:1115550001, 
							<span>Fax:190-4509-494</span>
							Email: <a href="mailto:example@email.com">contact@example.com</a></p>
						</div>
					</div>
          
    </div>
  </div>
    </div>
  )
}

export default Contact
