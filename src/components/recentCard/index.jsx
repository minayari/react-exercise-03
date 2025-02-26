export default function RecentCard({ img, title, firstName, lastName }) {
  return (
    <div className="flex flex-col items-center">
      <img className="rounded-full" src={img.large} />
      <p className="mt-[0.5rem] text-[1.1rem] text-slate-600">
        {title}.{firstName} {lastName}
      </p>
    </div>
  );
}
