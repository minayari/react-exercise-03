import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const { imgObj, name, cell } = location.state || {};

  return (
    <div className="ring ring-slate-600/30 flex flex-col items-center w-[50rem] h-[30rem] m-auto mt-[3.5rem] rounded-[2rem] ">
      <img className="w-[13rem] mt-[4rem] rounded-full" src={imgObj.large} />
      <h2 className="text-[2rem] mt-[2rem] text-slate-800">
        {name.title}.{name.first} {name.last}
      </h2>
      <h4 className="text-[1.5rem] mt-[1rem] text-slate-500">{cell}</h4>
    </div>
  );
}
