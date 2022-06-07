import letterK from "../../assets/logo/letter-K.svg";
import letterAHome from "../../assets/logo/letter-A-Home.svg";
import letterS from "../../assets/logo/letter-S.svg";
import letterA from "../../assets/logo/letter-A.svg";
import "../../styles/header.css";

export function Header(props){
    return <header>
        <div id={'logo'}>
            <img id={"letterK"} className={'header-title'} src={letterK}/>
            <img id={'letterAHome'} className={'header-title'} src={letterAHome}/>
            <img id={'letterS'} className={'header-title'} src={letterS}/>
            <img id={'letterA'} className={'header-title'} src={letterA}/>
        </div>
        <ul id={'menu'}>
            <li id={'menu-home'}>Accueil</li>
            <li id={'menu-about'}>À propos</li>
        </ul>
    </header>
}

