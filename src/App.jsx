import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
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

  return (
    <>
      <div className="userCardContainer">
        {users.map((user) => (
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
