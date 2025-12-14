import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { imageUpload } from "../../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddContestForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.post(`${import.meta.env.VITE_API_URL}/plants`, payload),
    onSuccess: (data) => {
      console.log(data);
      // add a toast
      toast.success("plant added successfully");
      mutationReset();
    },
    onError: (error) => {
      console.log(error);
    },
    retry: 2,
  });
  const onSubmit = async (data) => {
    const {
      contestName,
      price,
      prizeMoney,
      description,
      deadline,
      category,
      image,
    } = data;
    const Imgfile = image[0];
    const imageURL = await imageUpload(Imgfile);

    try {
      const plantData = {
        image: imageURL,
        contestName,
        description,
        prizeMoney: Number(prizeMoney),
        price: Number(price),
        category,
        deadline: new Date(startDate).toISOString(),
      };
      console.log(plantData);
      return;
      await mutateAsync(plantData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  if (isPending) return <LoadingSpinner />;
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Contest Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="contestName" className="block text-gray-600">
                Contest Name
              </label>
              <input
                {...register("contestName", {
                  required: "Contest name is required",
                })}
                id="contestName"
                type="text"
                placeholder="Enter contest name"
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
              />
              {errors.contestName && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.contestName.message}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              {/* Category */}
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full px-4 py-3 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                >
                  <option value="">Select category</option>
                  <option value="Photography">Photography</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Music">Music</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.category.message}
                  </p>
                )}
              </div>
              {/* Date picker  */}
              <div className="flex-1 space-y-1 text-sm">
                <label htmlFor="Deadline" className="block text-gray-600">
                  Contest Deadline
                </label>
                <DatePicker
                  // {...register("deadline", {
                  //   required: "deadline is required",
                  //   valueAsNumber: true,
                  // })}
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="yyyy-MM-dd HH:mm"
                  placeholderText="Select date and time"
                />
                {/* {errors?.deadline && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.deadline.message}
                  </p>
                )} */}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                id="description"
                placeholder="Describe the contest rules and task..."
                className="w-full h-32 px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 flex flex-col">
            {/* Price & Prize */}
            <div className="flex gap-4">
              {/* Price */}
              <div className="flex-1 space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Entry Price
                </label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    valueAsNumber: true,
                  })}
                  id="price"
                  type="number"
                  placeholder="Entry fee"
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Prize Money */}
              <div className="flex-1 space-y-1 text-sm">
                <label htmlFor="prizeMoney" className="block text-gray-600">
                  Prize Money
                </label>
                <input
                  {...register("prizeMoney", {
                    required: "Prize money is required",
                    valueAsNumber: true,
                  })}
                  id="prizeMoney"
                  type="number"
                  placeholder="Total prize"
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                />
                {errors.prizeMoney && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.prizeMoney.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="p-4 w-full rounded-lg">
              <div className="border-4 border-dotted border-gray-300 rounded-lg p-6 text-center">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image", {
                      required: "Image is required",
                    })}
                    hidden
                  />
                  <div className="inline-block bg-lime-500 text-white px-4 py-2 rounded font-semibold hover:bg-lime-600">
                    Upload Contest Image
                  </div>
                </label>
                {errors.image && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.image.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full p-3 mt-4 font-medium text-white rounded shadow-md bg-lime-500 hover:bg-lime-600 transition"
            >
              {isPending ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Add Contest"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContestForm;
