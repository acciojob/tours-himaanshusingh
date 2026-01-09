import React, { useState, useContext } from "react";
import { Store } from "./App";

const Tour = ({ tour }) => {
  const [tours, setTours] = useContext(Store);
  const [fullInfo, setFullInfo] = useState(false);
  const { id, name, info, image, price } = tour;
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
      <img src={image} alt="img-1" className="tour-img" />
      <h2 className="tour-price">${price}</h2>
      <p id={`tour-item-para-${id}`}>{!fullInfo ? shortInfo : info }</p>
      <button id={`see-more-${id}`} onClick={toggleInfo}>{!fullInfo ? "See more" : "Show less" }</button>
      <button id={`delete-btn-${id}`} onClick={handleClick}>Remove</button>
    </div>
  ); // prettier-ignore
};

export default Tour;
