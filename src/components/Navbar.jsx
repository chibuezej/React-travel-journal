import "./App.css"
import logo from "../../public/assets/iconlogo.png"
import SvgGlobal from "../Assets/icon/svgGlobal";

function Navbar () {
    return(
        <nav>
            <SvgGlobal /> 
          <h3> my traveljournal.</h3>
        </nav>
    )
}

export default Navbar;