import {useState, useRef} from "react";
import {Chevron} from "../Chevron";
import "../../styles/style.css";

/*---MEMO---
Qu’est-ce qu’un Hook ? Un Hook est une fonction qui permet de « se brancher » sur des fonctionnalités React.
Par exemple, useState est un Hook qui permet d’ajouter l’état local React à des fonctions composants.

Appeler useState, qu’est-ce que ça fait ? Ça déclare une « variable d’état ».
Normalement, les variables « disparaissent » quand la fonction s’achève mais les variables d’état sont préservées par React.

Que renvoie useState ? Elle renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier.

useRef renvoie un objet ref modifiable dont la propriété current est initialisée avec l’argument fourni (initialValue). L’objet renvoyé persistera pendant toute la durée de vie du composant.
*/


export function Collapse(props){
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("collapse-icon");
    const content = useRef(null)

    function toggleCollapse(){
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        //console.log(content.current.scrollHeight);
        setRotateState(setActive === "active" ? "collapse-icon" : "collapse-icon rotation")
    }
    return <div className={"collapse-section"} id={props.id}>
        <button className={`collapse ${setActive}`} onClick={toggleCollapse}>
            <p className={"collapse-title"}>{props.title}</p>
            <Chevron className={`${setRotate}`} width={20} height={23} fill={"#FFF"}></Chevron>
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className={"collapse-content"}>
            <div className={"collapse-text"}>{props.children}</div>
        </div>
    </div>
}