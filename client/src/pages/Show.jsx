import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Show() {
  const { _id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/listings/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [_id]);

  if (loading)
    return (
        
      <div className="flex justify-center items-center min-h-screen text-gray-500 text-lg">
        Loading...
      </div>
    );

  if (!listing)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500 text-lg">
        No listing found.
      </div>
    );

  return (
<div className="max-w-full mx-auto px-6 py-10 min-h-screen">
  {/* Container */}
  <div className="border-2  p-3.5 gap-3 flex flex-col md:flex-row">

    {/* Main Image + Thumbnails on Mobile */}
    <div className="w-full md:w-1/2">
      {/* Main Image */}
      <div className="img-1 bg-amber-400 w-full h-[40vh] md:h-[51vh]">
        Big Main Image
      </div>

      {/* Mobile thumbnails */}
      <div className="flex gap-2 mt-3 md:hidden">
        <div className="bg-amber-700 h-[15vh] w-1/3">Small 1</div>
        <div className="bg-pink-50 h-[15vh] w-1/3">Small 2</div>

        {/* Show More overlay on mobile */}
        <div className="relative h-[15vh] w-1/3 bg-orange-50">
          Small 3
          <button className="absolute inset-0 bg-black/50 text-white font-semibold flex items-center justify-center">
            Show More
          </button>
        </div>
      </div>
    </div>

    {/* Desktop Right Column */}
    <div className="hidden md:flex flex-col  gap-2 w-1/2">
      <div className="img-2 bg-amber-700 h-[25vh] w-full">Second</div>
      <div className="flex gap-2">
        <div className="img-3 bg-pink-50 h-[25vh] w-1/2">Third</div>

        {/* Show More overlay on desktop */}
        <div className="relative bg-orange-50 h-[25vh] w-1/2">
          Fourth
          <button className="absolute inset-0 bg-black/50 text-white font-semibold flex items-center justify-center">
            Show More
          </button>
        </div>
      </div>
    </div>
  </div>


       
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {listing.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-6">{listing.description}</p>

      {/* Price & Location */}
      <div className="flex items-center justify-between mb-6 border-t border-b py-4">
        <span className="text-2xl font-semibold text-green-600">
          ₹{listing.pricePerNight} / night
        </span>
        <span className="text-gray-500 text-lg">
          📍 {listing.location?.city}
        </span>
      </div>

      {/* Amenities */}
      {listing.amenities && listing.amenities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Amenities
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {listing.amenities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link to={`/listings/${listing._id}/edit`}>
          <button className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow-[0_4px_0_0_#1e40af] hover:shadow-[0_2px_0_0_#1e40af] active:shadow-none active:translate-y-[4px] transition-all duration-150">
            Edit Listing
          </button>
        </Link>
       
     <button
  onClick={async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/listings/${listing._id}`, {
      method: "DELETE",
    });
    // refresh list or navigate
  }}
  className="px-6 py-3 rounded-lg bg-pink-500 text-white font-semibold shadow-[0_4px_0_0_#9d174d] hover:shadow-[0_2px_0_0_#9d174d] active:shadow-none active:translate-y-[4px] transition-all duration-150"
>
  Delete
</button>
          
        
     
      </div>
    </div>



  );
}
