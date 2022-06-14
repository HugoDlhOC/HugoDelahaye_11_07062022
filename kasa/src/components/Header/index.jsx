import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo/logo-header.svg"
import "../../styles/style.css";

export function Header(props){
    return <header>
        <img id={"logo-header"} src={logo}/>
        <nav>
            <ul id={'menu'}>
                <Link to={"/"}>
                    <li id={'menu-home'}>Accueil</li>
                </Link>
                <Link to={"/about"}>
                    <li id={'menu-about'}>À propos</li>
                </Link>
            </ul>
        </nav>
    </header>
}

