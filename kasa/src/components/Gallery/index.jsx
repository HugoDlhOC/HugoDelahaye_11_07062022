import {useState} from "react";
import {Chevron} from "../Chevron";
import "../../styles/style.css";

export function Gallery({logement}){

    function previous(){
        const galleryPicture = document.querySelector("#gallery-picture")
        console.log(logement.pictures.length)

        //Si l'on est à la première image
        if(current === 0){
            galleryPicture.src = logement.pictures[setCurrent(logement.pictures.length - 1)];
        }
        else {
            //On affiche la photo précédente
            galleryPicture.src = logement.pictures[setCurrent(current - 1)];
        }
    }

    function after(){
        const galleryPicture = document.querySelector("#gallery-picture")
        console.log(logement.pictures.length)

        //Si l'on est à la dernière image
        if(current === logement.pictures.length - 1){
            galleryPicture.src = logement.pictures[setCurrent(0)];
        }
        else {
            //On affiche la photo suivante
            galleryPicture.src = logement.pictures[setCurrent(current + 1)];
        }
    }

    const [current, setCurrent] = useState(0);
    if(logement.pictures.length === 1){
        //On n'affiche pas les 2 boutons
        return <div className={"gallery"}>
            <img id={"gallery-picture"} src={logement.pictures[current]}/>
        </div>
    }
    else {
        return <div className={"gallery"}>
            <button id={"btn-previous-picture"} onClick={previous}>
                <Chevron className={"chevron-gallery-picture"} height={"79.2px"} width={"46.68px"} fill={"white"}></Chevron>
            </button>
            <img id={"gallery-picture"} src={logement.pictures[current]}/>
            <button id={"btn-next-picture"} onClick={after}>
                <Chevron className={"chevron-gallery-picture"} height={"79.2px"} width={"46.68px"} fill={"white"}></Chevron>
            </button>
            <span id={"counter-picture"}>{current + 1}/{logement.pictures.length}</span>
        </div>
    }
}