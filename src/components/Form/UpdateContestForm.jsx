import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { imageUpload } from "../../utils";

const UpdateContestForm = ({ contest, refetch, setIsEditModalOpen }) => {
  const axiosSecure = useAxiosSecure();
  const [deadline, setDeadline] = useState(
    contest?.deadline ? new Date(contest.deadline) : null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contestName: contest?.contestName,
      category: contest?.category,
      description: contest?.description,
      instruction: contest?.instruction,
      price: contest?.price,
      prizeMoney: contest?.prizeMoney,
    },
  });
  const handelUpdate = async (data) => {
    const {
      contestName,
      image,
      category,
      description,
      instruction,
      price,
      prizeMoney,
    } = data;
    const imgFile = image?.[0];

    let imageUrl = contest?.image;
    if (imgFile) {
      imageUrl = await imageUpload(imgFile);
    }
    const contestData = {
      image: imageUrl,
      contestName,
      description,
      instruction,
      prizeMoney: Number(prizeMoney),
      price: Number(price),
      category,
      status: contest?.status,
      participent: contest?.participent,
      saller: contest?.saller,
      deadline: deadline.toISOString(),
    };
    console.log(contestData);
    try {
      const data = await axiosSecure.patch(
        `/contest-update/${contest._id}`,
        contestData
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      // console.log("filek");
      refetch();
      setIsEditModalOpen(false);
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(handelUpdate)}>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                {...register("contestName", {
                  required: "Contest name is required",
                })}
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="contestName"
                
                type="text"
                placeholder="Contest Name"
                required
              />
              {errors.contestName && (
                <p className="text-red-500 text-xs">
                  {errors.contestName.message}
                </p>
              )}
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Category
              </label>
              <select
                {...register("category", {
                  required: "Category is required",
                })}
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="category"
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
                placeholder="Write plant description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                name="description"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-xs">
                  {errors.description.message}
                </p>
              )}
            </div>
            {/* Instruction */}
            <div className="space-y-1 text-sm">
              <label htmlFor="instruction" className="block text-gray-600">
                Instruction
              </label>

              <textarea
                {...register("instruction", {
                  required: "Instruction is required",
                })}
                id="instruction"
                placeholder="Write plant description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                name="instruction"
              ></textarea>
              {errors.instruction && (
                <p className="text-red-500 text-xs">
                  {errors.instruction.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price $ Prize */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    valueAsNumber: true,
                  })}
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                />
                {errors.price && (
                  <p className="text-red-500 text-xs">{errors.price.message}</p>
                )}
              </div>
              {/* Prize */}
              <div className="space-y-1 text-sm">
                <label htmlFor="prize" className="block text-gray-600">
                  Prize Money
                </label>
                <input
                  {...register("prizeMoney", {
                    required: "Prize money is required",
                    valueAsNumber: true,
                  })}
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  type="number"
                  placeholder="Prize Money"
                />
                {errors.prizeMoney && (
                  <p className="text-red-500 text-xs">
                    {errors.prizeMoney.message}
                  </p>
                )}
              </div>
            </div>
            {/* deadline  */}
            <div className="flex-1 space-y-1 text-sm">
              <label className="block text-gray-600">Contest Deadline</label>
              <DatePicker
                startDate={contest?.deadline}
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText="Select date & time"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
              />
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      {...register("image")}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              Update Plant
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateContestForm;
