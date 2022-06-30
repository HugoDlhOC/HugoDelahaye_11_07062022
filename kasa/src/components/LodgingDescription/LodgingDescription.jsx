import { Collapse } from "../Collapse";
import { Gallery } from "../Gallery";
import { Tag } from "../Tag";
import { Star } from "../Star";
import { Owner } from "../Owner";

export const LodgingDescription = ({ activeLogement }) => {
  const tab = [1, 2, 3, 4, 5];

  return (
    <section id={"lodging-description"}>
      <div id={"container-gallery"}>
        <Gallery logement={activeLogement} />
      </div>
      <div id={"container-primary-infos"}>
        <div id={"container-logement-infos"}>
          <h2 id={"active-name-location"}>{activeLogement.title}</h2>
          <p id={"active-place-location"}>{activeLogement.location}</p>
          <div className={"tags"}>
            {activeLogement.tags.map((tag, index) => {
              return <Tag content={tag} key={index} />;
            })}
          </div>
        </div>
        <div id={"container-owner-stars"}>
          <div id={"container-owner"}>
            <Owner
              name={activeLogement.host.name}
              picture={activeLogement.host.picture}
            />
          </div>
          <div id={"evaluation"}>
            {tab.map((item, index) => (
              <Star
                fill={index + 1 > activeLogement.rating ? "#E3E3E3" : "#FF6060"}
                width={"30"}
                height={"30"}
                className={"star"}
                key={index}
              ></Star>
            ))}
          </div>
        </div>
      </div>
      <div id={"collapses"}>
        <Collapse title={"Description"} id={"collapse-description"}>
          <p className={"description-logement-collapse"}>
            {activeLogement.description}
          </p>
        </Collapse>
        <Collapse title={"Équipements"} id={"collapse-equipments"}>
          <ul className={"list-equipments"}>
            {activeLogement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}
