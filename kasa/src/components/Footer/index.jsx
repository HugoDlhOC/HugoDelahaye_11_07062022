import "../../styles/style.css";
import logo from "../../assets/logo/logo-footer.svg";

export function Footer(props){
    return <footer>
        <a href={"/"}><img id={"logo-footer"} src={logo} alt={"logo pied de page du site"}/></a>
        <p id={"copyrights"}>© 2020 Kasa. All rights reserved</p>
    </footer>
}