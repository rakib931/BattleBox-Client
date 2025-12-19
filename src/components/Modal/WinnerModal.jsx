import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const WinnerModal = ({ isOpenWin, task, closeModalWin }) => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: task?.customerName,
      customerEmail: task?.customerEmail,
      submitedTask: task?.submitedTask,
    },
  });

  const onSubmit = async (data) => {
    const { customerName, customerEmail, submitedTask, marks } = data;
    const winnerData = {
      winnerName: customerName,
      winnerEmail: customerEmail,
      winnerImage: task?.customerImage,
      winnerMarks: Number(marks),
      submitedTask,
      contestName: task?.contestName,
      prize: task?.prizeMoney,
      creator: task?.creator, // optional
    };
    try {
      const { data } = await axiosSecure.post("/add-winner", winnerData);
      if (data === "Already Decleared Winner") {
        toast.error(data);
      }
      if (data === "Winner Decleared") {
        toast.success(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      closeModalWin();
      reset();
    }
  };

  return (
    <Dialog
      open={isOpenWin}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModalWin}
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
                Set Winner
              </DialogTitle>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeModalWin}
              >
                X
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md  p-6 rounded-xl  space-y-5"
            >
              {/* Name Input */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  readOnly
                  type="text"
                  placeholder="Enter name"
                  {...register("customerName")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* email Input */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  readOnly
                  type="email"
                  {...register("customerEmail")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Marks Input */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Marks out of 100
                </label>
                <input
                  type="number"
                  {...register("marks", { required: "Marks is require" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.marks && (
                  <p className="text-red-500 text-xs">{errors.marks.message}</p>
                )}
              </div>
              {/* submition  */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  What Participent Submited
                </label>
                <input
                  type="text"
                  readOnly
                  {...register("submitedTask")}
                  className="w-full h-15 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
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
