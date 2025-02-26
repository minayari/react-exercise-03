import { useEffect, useRef, useState } from "react";
import UserCard from "../components/UserCard";
import api from "../api/api";
import RecentCard from "../components/recentCard";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);
  const [searchResult, setSearchResult] = useState([]);
  const recentData = JSON.parse(localStorage.getItem("recent"));

  console.log(recentData);

  async function fetcher() {
    const data = await api.get("api/?results=50");
    localStorage.setItem("users", JSON.stringify(data.data.results));
    setUsers(data.data.results);
    return data.data.results;
  }

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      fetcher();
    } else {
      const userData = JSON.parse(localStorage.getItem("users"));
      setUsers(userData);
    }
  }, []);

  function searchChangeHandler() {
    setSearchResult(
      users.filter(
        (item) =>
          item.name.title
            .toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.name.first
            .toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.name.last
            .toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.cell.includes(inputRef.current.value)
      )
    );
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          className="w-[20rem] h-[2rem] mt-[1rem] p-[0.5rem] bg-zinc-200 rounded-[0.5rem] focus:outline-none"
          ref={inputRef}
          onChange={searchChangeHandler}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="recentContainer">
        <h2>Recent contacts:</h2>
        <div className="recentCards">
          {recentData.map((data) => (
            <RecentCard
              img={data.img}
              title={data.title}
              firstName={data.firstName}
              lastName={data.lastName}
              key={`${data.firstName}-${data.phone}`}
            />
          ))}
        </div>
      </div>
      <div className="userCardContainer">
        {searchResult.length === 0
          ? users.map((user) => (
              <UserCard
                key={`${user.id.value ?? user.name.first}-${user.cell} `}
                imgObj={user.picture}
                name={user.name}
                cell={user.cell}
              />
            ))
          : searchResult.map((user) => (
              <UserCard
                key={`${user.id.value ?? user.name.first}-${user.cell} `}
                imgObj={user.picture}
                name={user.name}
                cell={user.cell}
              />
            ))}
      </div>
    </>
  );
}
