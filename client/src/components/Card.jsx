import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Card() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, []);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-8 bg-gray-50 min-h-screen">
      {listing.map((data) => (
        <Link
          to={`/listings/${data._id}`}
          key={data._id}
          className="group block rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          {/* Image */}
          <div className="h-48 w-full bg-gray-200">
            <img
              src={data.image || "https://via.placeholder.com/400x300"}
              alt={data.title}
              className="h-full w-full object-cover group-hover:brightness-95 transition-all duration-300"
            />
          </div>

          {/* Card Body */}
          <div className="p-5">
            {/* Title */}
            <h1 className="text-xl font-bold text-gray-800 mb-1">
              {data.title}
            </h1>

            {/* Rating */}
            {data.rating && (
              <span className="text-sm text-yellow-500 font-medium">
                ⭐ {data.rating.average} ({data.rating.count})
              </span>
            )}

            {/* Description */}
            <p className="text-gray-600 mt-2 mb-4 line-clamp-3">
              {data.description}
            </p>

            {/* Price & Location */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">
                ₹{data.pricePerNight}
              </span>
              <span className="text-sm text-gray-500">
                📍 {data.location?.city}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
