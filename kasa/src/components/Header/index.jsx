import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo/logo-header.svg"
import "../../styles/style.css";

export function Header(props){
    return <header>
        <img id={"logo-header"} src={logo}/>
        <nav>
            <ul id={'menu'}>
                <NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>
                    <li id={'menu-home'}>Accueil</li>
                </NavLink>
                <NavLink to={"/about"} className={({isActive}) => isActive ? "active" : ""}>
                    <li id={'menu-about'}>À propos</li>
                </NavLink>
            </ul>
        </nav>
    </header>
}

