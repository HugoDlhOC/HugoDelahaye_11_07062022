import {Link} from "react-router-dom";

export function Error(props){
    return <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}>Retourner sur la page d’accueil</Link>
    </div>
}