import React, { useState } from "react";

function Tour({ id, image, info, price, name, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const text = showMore ? info : `${info.substring(0, 200)}...`;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="tour-img" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p id={`tour-item-para-${id}`}>
          {text}
          <button
            id={`see-more-${id}`}
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show less" : "See more"}
          </button>
        </p>

        <button
          id={`delete-btn-${id}`}
          className="btn-remove"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
}

export default Tour;
