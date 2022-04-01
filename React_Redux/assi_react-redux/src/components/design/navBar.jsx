import { Link } from "react-router-dom";
export const NavBar = () => {

  return(
   <div className="navbar">
     <Link style = {{color: "white", fontWeight: "600", fontSize: "20px"}} to="/">Home</Link>
     </div>
  )
}