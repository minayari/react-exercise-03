import { useNavigate } from "react-router-dom";
import Contact from "../../pages/Contact";

export default function UserCard({ imgObj, name, cell }) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/contact", { state: { imgObj, name, cell } });
  }

  return (
    <>
      <div onClick={navigateHandler} className="userCardContainer__item">
        <img src={imgObj.large} alt="user-image" />
        <h3>
          {name.title}.{name.first} {name.last}
        </h3>
        <span>{cell}</span>
      </div>
    </>
  );
}
