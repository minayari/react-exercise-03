export default function UserCard({ imgObj, name, cell }) {
  return (
    <>
      <div className="userCardContainer__item">
        <img src={imgObj.large} alt="user-image" />
        <h3>
          {name.title}.{name.first} {name.last}
        </h3>
        <span>{cell}</span>
      </div>
    </>
  );
}
