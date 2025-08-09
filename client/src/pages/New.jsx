
import { useForm } from "react-hook-form";

function ListingForm() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Created:", result);
    } catch (error) {
      console.error("Error creating listing:", error);
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

      {/* Location City */}
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
          placeholder="Enter State"
        />
        {errors.location?.state && <p>{errors.location.state.message}</p>}
         <label>Country</label>
        <input
          {...register("location.country", { required: "Country is required" })}
          placeholder="Enter Country"
        />
        {errors.location?.country && <p>{errors.location.country.message}</p>}
      </div>

      <button type="submit">Create Listing</button>
    </form>
  );
}

export default ListingForm;