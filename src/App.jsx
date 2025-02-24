import { useEffect, useRef, useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      fetch("https://randomuser.me/api/?results=50")
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem("users", JSON.stringify(json.results));
          setUsers(json.results);
        });
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
      <div className="inputContainer">
        <input
          ref={inputRef}
          onChange={searchChangeHandler}
          type="text"
          placeholder="Search..."
        />
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

export default App;
