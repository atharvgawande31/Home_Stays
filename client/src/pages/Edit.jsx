import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditListingForm() {
  const { _id } = useParams(); // assuming route is /listings/:id/edit
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // used to set form values dynamically
  } = useForm();

  // Fetch existing listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`http://localhost:3000/listings/${_id}/edit`);
        if (!res.ok) throw new Error("Failed to fetch listing");
        const data = await res.json();

        // Fill form with existing data
        reset({
          title: data.title,
          description: data.description,
          pricePerNight: data.pricePerNight,
          location: {
            city: data.location.city,
            state: data.location.state,
            country: data.location.country,
          },
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchListing();
  }, [_id, reset]);

  // Submit updated data
  const onSubmit = async (formData) => {
    try {
      const res = await fetch(`http://localhost:3000/listings/${_id}`, {
        method: "PUT", // or PATCH depending on backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Listing updated successfully!");
        navigate(`/listings/${_id}`);
      } else {
        alert("Failed to update listing");
      }
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <div>
        <label>Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          placeholder="Enter title"
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label>Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Enter description"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      {/* Price Per Night */}
      <div>
        <label>Price Per Night</label>
        <input
          type="number"
          step="0.01"
          {...register("pricePerNight", {
            required: "Price is required",
            valueAsNumber: true,
          })}
          placeholder="Enter price"
        />
        {errors.pricePerNight && <p>{errors.pricePerNight.message}</p>}
      </div>

      {/* Location */}
      <div>
        <label>City</label>
        <input
          {...register("location.city", { required: "City is required" })}
          placeholder="Enter city"
        />
        {errors.location?.city && <p>{errors.location.city.message}</p>}

        <label>State</label>
        <input
          {...register("location.state", { required: "State is required" })}
          placeholder="Enter state"
        />
        {errors.location?.state && <p>{errors.location.state.message}</p>}

        <label>Country</label>
        <input
          {...register("location.country", { required: "Country is required" })}
          placeholder="Enter country"
        />
        {errors.location?.country && <p>{errors.location.country.message}</p>}
      </div>
        
      
        <button type="submit">Update Listing</button>
    
      
    </form>
  );
}

export default EditListingForm;