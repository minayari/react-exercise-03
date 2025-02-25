import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const { imgObj, name, cell } = location.state || {};

  return (
    <div className="singelContact">
      <img src={imgObj.large} />
      <h2>{name.title}.{name.first} {name.last}</h2>
      <h4>{cell}</h4>
    </div>
  );
}
