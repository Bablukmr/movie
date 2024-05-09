import { Link } from "react-router-dom";

function Watchlist({ watchlist }) {
    console.log(watchlist);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Watchlist</h1>
      <ul>
        {watchlist?.map((item, index) => (
          <li key={index} className="mb-2">
            {item.Title} - {item.Year}
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Watchlist;
