import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Card() {

  const [listing, setLisitng] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => setLisitng(data));
  }, []);

  return (
    <>
      {listing.map((data, key) => (
        <Link
          to={`/listings/${data._id}`}
          key={data._id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.pricePerNight}</p>
            <p>{data.location.city}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
