import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";

const WinnerModal = ({ isWinner, contest, closeWinner }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, image } = data;
    console.log(name, image[0]);
  };

  return (
    <Dialog
      open={isWinner}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeWinner}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <DialogTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Are you sure?
              </DialogTitle>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeWinner}
              >
                X
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md  p-6 rounded-xl  space-y-5"
            >
              <h2 className="text-2xl font-semibold text-center text-gray-700">
                Add Winner
              </h2>

              {/* Name Input */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              {/* Image Input */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                  className="w-full file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
                />
                {errors.image && (
                  <p className="text-red-500 text-xs">{errors.image.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default WinnerModal;
