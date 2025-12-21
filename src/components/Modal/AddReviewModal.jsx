import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const AddReviewModal = ({ closeModal, isModalOpen }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const review = { review: data.review, name: user?.displayName };
    try {
      const { data } = await axiosSecure.post("/add-review", review);
      if (data === "Task Already Submited") {
        toast.error(data);
      }
      if (data === "Task Submited") {
        toast.success(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      closeModal();
    }
  };
 
  return (
    <Dialog
      open={isModalOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <div className="flex justify-between my-3">
              <DialogTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Add Your Review
              </DialogTitle>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="w-full max-w-sm">
              <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  {...register("review", {
                    required: "submitedTask is required",
                  })}
                  className="w-full h-32 px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                  placeholder="Describe the contest details..."
                />
                {errors?.review && (
                  <p className="text-red-500 text-xs">
                    {errors.review.message}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddReviewModal;
