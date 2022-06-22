import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo/logo-header.svg"
import "../../styles/style.css";

export function Header(props){
    return <header>
        <img id={"logo-header"} src={logo}/>
        <nav>
            <ul id={'menu'}>
                <li id={'menu-home'}><NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>Accueil</NavLink></li>
                <li id={'menu-about'}><NavLink to={"/about"} className={({isActive}) => isActive ? "active" : ""}>À propos</NavLink></li>
            </ul>
        </nav>
    </header>
}
