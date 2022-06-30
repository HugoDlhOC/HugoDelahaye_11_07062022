import "../../styles/style.css";

export const Banner = ({ src, text }) => {
  return (
    <section id={"banner"}>
      <img src={src} alt={"paysage bannière"} />
      <h2 id={"text-banner"}>{text}</h2>
    </section>
  );
};
