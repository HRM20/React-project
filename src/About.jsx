import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div style={{margin:"1rem auto"}}>
      <div className='Address'>
    <NavLink to="/Home">Home</NavLink>{<span>/About</span>}
  </div>
      <div className="about-box">
      
        <h3> About us</h3>

        <p> Sapphire Studios Design, specialises in fine jewellery and premium perfumes. Our brand is synonymous with artistry, luxury, and meaningful design.
        </p>


        <p>Not only are we jewellers we are artists.</p>



        <p> Our award-winning studio and showroom is located in Melbourne and is internationally known for our alternative engagement rings, skull engagement rings and men’s skull rings. We ship worldwide.
        </p>
        <p>
          Every exquisite design that emerges from our studio begins with an idea or concept, often inspired by our favourite literature, artists, poets, or themes. Our primary focus is to imbue each piece with a sense of significance, creating jewellery that goes beyond beauty, evoking emotions and stories.
        </p>

        <p>
          From our inception, our vision has been to redefine the concept of traditional engagement rings and create something extraordinary.
        </p>
        <p>
          To differentiate from what may be considered ‘normal’ for an engagement ring. Our jewellery collections showcase unique and meaningful designs, where art and jewellery seamlessly merge. We take pride in offering a range that stands apart, enabling our customers to celebrate their individuality and personal taste.
        </p>

        <h4>
          Our WATCHES
        </h4>
        <p>
          In addition to our fine jewellery, we take great care in curating premium perfumes, ensuring that each scent is a captivating masterpiece. Only the highest quality scents, blended at precise concentrations, find their way into our signature fragrances. Our studio designs and hand-paints each perfume bottle and packaging.
        </p>

        <p>
          We understand each person’s individuality and this is the key to our collections – don’t be ruled by trends, define your own identity. From alternative to traditional and vintage to modern, each piece is carefully designed and skilfully crafted in our studio.
        </p>

        <p>
          We only cast in the finest metals.
        </p>

        <p>
          If you are wanting to make changes all rings can be customised to your metal and stones, we also design custom rings via our design your own ring custom service.
        </p>

        <h4>
          Follow us on Instagram to stay updated with our latest creations
        </h4>
      </div>
      <div className="img-store">

        <div className="img-info">
          <p>Melbourne Store</p>
          <p>525 High Street, Northcote</p>
          <p>Melbourne, Australia</p>
          <p>View our showroom information here</p>
        </div>
        <img src="https://www.datocms-assets.com/99008/1696862368-andorra-luxury-watches-spirits.webp?auto=compress%2Cformat" alt="" />
      </div>
    </div>
  )
}

export default About
