import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Watchlist from "./watchlist";

function Home() {
  const [apiVal, setApiVal] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=action&apikey=acac0345&page=1")
      .then((res) => res.json())
      .then((data) => {
        setApiVal(data.Search);
      });
  }, []);

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += window.innerWidth;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const addToWatchlist = (item) => {
    setWatchlist([...watchlist, item]);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 p-6 w-fit">
        {apiVal.map((val, index) => (
          <div key={index} className="flex flex-col p-4 shadow-md rounded-md">
            <img
              src={val.Poster}
              alt={val.Title}
              className="w-full h-[300px]"
            />
            <h2 className="text-lg font-semibold">{val.Title}</h2>
            <h2>Year-{val.Year}</h2>
            <h2>imdbID-{val.imdbID}</h2>
            <Link
              to={`/${val.imdbID}`}
              className="px-2 py-1 flex items-center justify-center rounded-md bg-green-600 shadow-lg text-white"
            >
              Watch
            </Link>

            <button
              onClick={() => addToWatchlist(val)}
              className="px-2 mt-4 py-1 flex items-center justify-center rounded-md bg-blue-600 shadow-lg text-white"
            >
              Add to Watchlist
            </button>
          </div>
        ))}
      </div>

      <div>
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {apiVal.map((val, index) => (
            <div
              key={index}
              className="flex-none w-screen h-screen flex items-center justify-center"
            >
              <div className="p-2">
                <img src={val.Poster} alt={val.Title} className="w-64 h-96" />
                <h2 className="text-lg font-semibold">{val.Title}</h2>
                <h2>Year-{val.Year}</h2>
                <h2>imdbID-{val.imdbID}</h2>
                <Link
                  to={`/${val.imdbID}`}
                  className="px-2 py-1 flex items-center justify-center rounded-md bg-green-600 shadow-lg text-white"
                >
                  Watch
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 m-4 p-4 bg-gray-200 rounded-md">
        <p
          onClick={() => alert("Your Watchlist: " + JSON.stringify(watchlist))}
          className="cursor-pointer text-blue-500 font-semibold"
        >
          Watchlist ({watchlist.length})
        </p>
        
      </div>
    </>
  );
}

export default Home;
