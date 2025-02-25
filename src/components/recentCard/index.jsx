export default function RecentCard({ img, title, firstName, lastName }) {
  return (
    <div>
      <img src={img.large} />
      <p>
        {title}.{firstName} {lastName}
      </p>
    </div>
  );
}
