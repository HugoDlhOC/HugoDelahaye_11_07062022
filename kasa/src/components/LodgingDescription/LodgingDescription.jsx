import {Collapse} from "../Collapse";

export function LodgingDescription(props){
    return <div>
        <h2>Titre de la location</h2>
        <p>Localisation de la location</p>
        <Collapse title={"Description"} content={"content collapse"}></Collapse>
        <Collapse title={"Équipements"} content={"content collapse"}></Collapse>
    </div>
}