import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
const SeeSubmitionModal = ({ closeModal, isOpen, task }) => {
  return (
    <Dialog
      open={isOpen}
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
                What you submited
              </DialogTitle>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="mt-2">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                {/* Participant Name */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {task?.customerName}
                </h3>

                {/* Email */}
                <p className="text-sm text-gray-500 mt-1">
                  📧 {task?.customerEmail}
                </p>

                {/* Submitted Task Info */}
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Submitted Task
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {task?.submitedTask}
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SeeSubmitionModal;
