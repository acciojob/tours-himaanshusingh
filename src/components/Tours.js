import React, { useContext } from "react";
import Tour from "./Tour";
import { Store } from "./App";

const Tours = () => {
  const [tours, setTours, api, setIsLoading] = useContext(Store);

  function handleClick() {
    setIsLoading(true);
    (async function () {
      const data = await fetch(api);
      const toursData = await data.json();
      setTours(toursData);
      setIsLoading(false);
    })();
  }

  return (
    <div className="tours-container">
      {tours.length > 0 ? (
        tours.map((tour) => (
          <div key={tour.id} className="tour">
            <Tour tour={tour} />
          </div>
        ))
      ) : (
        <div>
          <h1>"No more tours"</h1>
          <button onClick={handleClick}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default Tours;
