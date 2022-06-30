export const Owner = ({ name, picture }) => {
  return (
    <div className={"owner"}>
      <p id={"owner-name"}>{name}</p>
      <img
        id={"owner-picture"}
        src={picture}
        alt={"photo de profil du propriétaire " + name}
      />
    </div>
  );
};
