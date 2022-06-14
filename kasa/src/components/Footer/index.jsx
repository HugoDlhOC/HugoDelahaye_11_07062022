import "../../styles/style.css";
import logo from "../../assets/logo/logo-footer.svg";

export function Footer(props){
    return <footer>
        <img id={"logo-footer"} src={logo}/>
        <p id={"copyrights"}>© 2020 Kasa. All rights reserved</p>
    </footer>
}