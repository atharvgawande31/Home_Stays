import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Show() {
  const { _id } = useParams(); // 👈 get ID from the URL
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/listings/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
  }, [_id]);

    if (loading) return <p>Loading...</p>;
  if (!listing) return <p>No listing found.</p>;

  return (
    <div key={listing._id}>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>{listing.pricePerNight}</p>
      <p>{listing.location?.city}</p>
    </div>
  );
}
