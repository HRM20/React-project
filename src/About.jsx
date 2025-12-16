import { NavLink } from "react-router-dom";
import Reviews from "./Reviews";

const About = () => {
  return (
    <div>
      <div className="container py-4">
        {/* Breadcrumb */}
        <div className="Address  align-items-center mb-4">
          <NavLink to="/Home" className="text-primary me-2">
            Home
          </NavLink>
          <span>/ About</span>
        </div>

        {/* About Text */}
        <div className="about-box mb-5">
          <h3 className="mb-3">About us</h3>

          <p>
            Sapphire Studios Design specialises in fine jewellery and premium
            perfumes. Our brand is synonymous with artistry, luxury, and
            meaningful design.
          </p>

          <p>Not only are we jewellers, we are artists.</p>

          <p>
            Our award-winning studio and showroom is located in Melbourne and is
            internationally known for our alternative engagement rings, skull
            engagement rings, and men’s skull rings. We ship worldwide.
          </p>

          <p>
            Every exquisite design that emerges from our studio begins with an
            idea or concept, often inspired by our favourite literature,
            artists, poets, or themes. Our primary focus is to imbue each piece
            with a sense of significance, creating jewellery that goes beyond
            beauty, evoking emotions and stories.
          </p>

          <p>
            From our inception, our vision has been to redefine the concept of
            traditional engagement rings and create something extraordinary.
          </p>

          <p>
            To differentiate from what may be considered ‘normal’ for an
            engagement ring. Our jewellery collections showcase unique and
            meaningful designs, where art and jewellery seamlessly merge. We
            take pride in offering a range that stands apart, enabling our
            customers to celebrate their individuality and personal taste.
          </p>

          <h4 className="mt-4">Our WATCHES</h4>
          <p>
            In addition to our fine jewellery, we take great care in curating
            premium perfumes, ensuring that each scent is a captivating
            masterpiece. Only the highest quality scents, blended at precise
            concentrations, find their way into our signature fragrances. Our
            studio designs and hand-paints each perfume bottle and packaging.
          </p>

          <p>
            We understand each person’s individuality and this is the key to our
            collections – don’t be ruled by trends, define your own identity.
            From alternative to traditional and vintage to modern, each piece is
            carefully designed and skilfully crafted in our studio.
          </p>

          <p>We only cast in the finest metals.</p>

          <p>
            If you are wanting to make changes all rings can be customised to
            your metal and stones, we also design custom rings via our design
            your own ring custom service.
          </p>

          <h4 className="mt-4">
            Follow us on Instagram to stay updated with our latest creations
          </h4>
        </div>

        {/* Store Info with Image */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <div className="bg-light p-3 rounded">
              <p className="mb-1">
                <strong>Melbourne Store</strong>
              </p>
              <p className="mb-1">525 High Street, Northcote</p>
              <p className="mb-1">Melbourne, Australia</p>
              <p className="mb-0 text-primary cursor-pointer">
                View our showroom information here
              </p>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <img
              src="https://www.datocms-assets.com/99008/1696862368-andorra-luxury-watches-spirits.webp?auto=compress%2Cformat"
              alt="Melbourne Store"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Reviews Component */}
      </div>
      <Reviews />
    </div>
  );
};

export default About;
