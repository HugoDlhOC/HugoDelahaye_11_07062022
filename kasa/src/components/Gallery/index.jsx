import { useState } from "react";
import { Chevron } from "../Chevron";
import "../../styles/style.css";

export const Gallery = ({ logement }) => {
  const previous = () => {
    const galleryPicture = document.querySelector("#gallery-picture");
    console.log(logement.pictures.length);

    //Si l'on est à la première image
    if (current === 0) {
      galleryPicture.src =
        logement.pictures[setCurrent(logement.pictures.length - 1)];
    } else {
      //On affiche la photo précédente
      galleryPicture.src = logement.pictures[setCurrent(current - 1)];
    }
  };

  const after = () => {
    const galleryPicture = document.querySelector("#gallery-picture");
    console.log(logement.pictures.length);

    //Si l'on est à la dernière image
    if (current === logement.pictures.length - 1) {
      galleryPicture.src = logement.pictures[setCurrent(0)];
    } else {
      //On affiche la photo suivante
      galleryPicture.src = logement.pictures[setCurrent(current + 1)];
    }
  };

  const [current, setCurrent] = useState(0);
  return (
    <div className={"gallery"}>
      {logement.pictures.length > 1 && (
        <button id={"btn-previous-picture"} onClick={previous}>
          <Chevron
            className={"chevron-gallery-picture"}
            height={"79.2px"}
            width={"46.68px"}
            fill={"white"}
          ></Chevron>
        </button>
      )}
      <img
        id={"gallery-picture"}
        src={logement.pictures[current]}
        alt={
          "photo gallerie " +
          (current + 1) +
          "/" +
          logement.pictures.length +
          " de la location " +
          logement.title
        }
      />
      {logement.pictures.length > 1 && (
        <button id={"btn-next-picture"} onClick={after}>
          <Chevron
            className={"chevron-gallery-picture"}
            height={"79.2px"}
            width={"46.68px"}
            fill={"white"}
          ></Chevron>
        </button>
      )}
      {logement.pictures.length > 1 && (
        <span id={"counter-picture"}>
          {current + 1}/{logement.pictures.length}
        </span>
      )}
    </div>
  );
};
