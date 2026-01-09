import React, { useState, useContext } from "react";
import { Store } from "./App";

const Tour = ({ tour }) => {
  const [tours, setTours] = useContext(Store);
  const [fullInfo, setFullInfo] = useState(false);
  const { name, info, image, price } = tour;
  const shortInfo = info.split(" ").slice(0, 10).join(" ") + "...";

  function toggleInfo() {
    setFullInfo(!fullInfo);
  }

  function handleClick() {
    setTours(tours.filter((tour) => tour.name != name));
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="img-1" />
      <h2>${price}</h2>
      <p>{!fullInfo ? shortInfo : info }</p>
      <button onClick={toggleInfo}>{!fullInfo ? "Show More" : "See Less" }</button>
      <button onClick={handleClick}>Remove</button>
    </div>
  ); // prettier-ignore
};

export default Tour;
