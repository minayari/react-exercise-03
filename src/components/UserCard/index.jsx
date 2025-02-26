import { useNavigate } from "react-router-dom";
import Contact from "../../pages/Contact";

export default function UserCard({ imgObj, name, cell }) {
  const navigate = useNavigate();

  function saveSingleContact(img, name, cell) {
    const singelContact = {
      img: img,
      title: name.title,
      firstName: name.first,
      lastName: name.last,
      phone: cell,
    };
    let recentContacts = JSON.parse(localStorage.getItem("recent")) || [];
    const isDublicate = recentContacts.some((item) => item.phone === cell);

    if (isDublicate) {
      return;
    }

    if (recentContacts.length >= 4) {
      recentContacts.shift();
    }

    recentContacts.push(singelContact);
    localStorage.setItem("recent", JSON.stringify(recentContacts));
  }

  function navigateHandler() {
    navigate("/contact", { state: { imgObj, name, cell } });
    saveSingleContact(imgObj, name, cell);
  }

  return (
    <>
      <div
        onClick={navigateHandler}
        className="w-[10rem] h-[15rem] flex flex-col items-center mr-[0.5rem] ml-[0.5rem]"
      >
        <img className=" rounded-full" src={imgObj.large} alt="user-image" />
        <h3 className="text-center text-[1rem] mt-[0.8rem] text-slate-800 font-bold">
          {name.title}.{name.first} {name.last}
        </h3>
        <span className="text-[0.85rem] mt-[0.3rem] text-slate-600">{cell}</span>
      </div>
    </>
  );
}
