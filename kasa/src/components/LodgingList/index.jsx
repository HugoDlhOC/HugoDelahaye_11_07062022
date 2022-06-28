import { useEffect, useState } from "react";
import { LodgingCard } from "../LodgingCard";
import "../../styles/style.css";

export function LodgingList(props) {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/HugoDelahaye_11_07062022/logements.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setLogements(data);
      });
  }, []); //pas de dépendance, on exécute une seule fois

  return (
    <section id={"lodgings-list"}>
      {isLoading && <p>Chargement ...</p>}
      {logements.map((logement, index) => {
        return (
          <LodgingCard
            nameLocation={logement.title}
            imgLocation={logement.cover}
            linkNumber={logement.id}
            key={index}
          />
        );
      })}
    </section>
  );
}
