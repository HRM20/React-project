// import aks from "./assets/404.png"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <img src={"https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"} alt="" style={{width: "90%" , margin:"0 0"}} />
    <br />
      <Link to="/">BACK TO MAIN PAGE</Link>
    </div>
  )
}

export default NotFound
