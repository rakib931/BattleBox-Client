import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { imageUpload } from "../../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorPage from "../../pages/ErrorPage";
import useAuth from "../../hooks/useAuth";
const AddContestForm = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isPending,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/contests`,
        payload
      ),
    onSuccess: (data) => {
      console.log(data);
      // add a toast
      toast.success("Contest added successfully");
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
      category,
      instruction,
      image,
    } = data;
    const Imgfile = image[0];
    const imageURL = await imageUpload(Imgfile);

    try {
      const contestData = {
        image: imageURL,
        contestName,
        description,
        instruction,
        prizeMoney: Number(prizeMoney),
        price: Number(price),
        category,
        status: "pending",
        participent: 0,
        saller: user?.email,
        deadline: new Date(startDate).toISOString(),
      };

      await mutateAsync(contestData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  if (isPending) return <LoadingSpinner />;
  // if (isError) return <ErrorPage />;
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Contest Name */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Contest Name</label>
              <input
                {...register("contestName", {
                  required: "Contest name is required",
                })}
                type="text"
                placeholder="Enter contest name"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
              />
              {errors.contestName && (
                <p className="text-red-500 text-xs">
                  {errors.contestName.message}
                </p>
              )}
            </div>

            {/* Category + Deadline */}
            <div className="flex gap-4">
              <div className="flex-1 space-y-1 text-sm">
                <label className="block text-gray-600">Category</label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                >
                  <option value="">Select category</option>
                  <option value="Photography">Photography</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Music">Music</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-1 text-sm">
                <label className="block text-gray-600">Contest Deadline</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="yyyy-MM-dd HH:mm"
                  placeholderText="Select date & time"
                  className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full h-32 px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                placeholder="Describe the contest details..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Text Instructions */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">
                Contest Instructions
              </label>
              <textarea
                {...register("instruction", {
                  required: "Instruction is required",
                })}
                className="w-full h-28 px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                placeholder={`Example:
• Submit original work
• File format: JPG/PNG
• Max size: 5MB`}
              />
              {errors.instruction && (
                <p className="text-red-500 text-xs">
                  {errors.instruction.message}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Price & Prize */}
            <div className="flex gap-4">
              <div className="flex-1 space-y-1 text-sm">
                <label className="block text-gray-600">Entry Price</label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Entry fee"
                  className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                />
                {errors.price && (
                  <p className="text-red-500 text-xs">{errors.price.message}</p>
                )}
              </div>

              <div className="flex-1 space-y-1 text-sm">
                <label className="block text-gray-600">Prize Money</label>
                <input
                  {...register("prizeMoney", {
                    required: "Prize money is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Total prize"
                  className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                />
                {errors.prizeMoney && (
                  <p className="text-red-500 text-xs">
                    {errors.prizeMoney.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="border-4 border-dotted border-gray-300 rounded-lg p-6 text-center">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  {...register("image", {
                    required: "Image is required",
                  })}
                />
                <span className="inline-block bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600">
                  Upload Contest Image
                </span>
              </label>
              {errors.image && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600"
            >
              Add Contest
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContestForm;
