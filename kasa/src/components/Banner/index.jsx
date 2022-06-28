import "../../styles/style.css";
import { logements } from "../../assets/data/logements";

export function Banner({ src, text }) {
  //à la place de props & props.src
  return (
    <section id={"banner"}>
      <img src={src} alt={"image bannière"} />
      <h2 id={"text-banner"}>{text}</h2>
    </section>
  );
}
