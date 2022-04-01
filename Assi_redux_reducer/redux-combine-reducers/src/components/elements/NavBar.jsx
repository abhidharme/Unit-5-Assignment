import { Link } from "react-router-dom";
export const NavBar = () => {

    return (
        <div className="navBar">
             <Link style = {{color: "white", fontSize: "18px"}} to="/">Home</Link>
            </div>
    )
}