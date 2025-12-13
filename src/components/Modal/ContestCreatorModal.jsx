import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
const ContestCreatorModal = ({ closeModal, isOpen }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, organization, experience, message } = data;
    const providerData = {
      name,
      image: user?.photoURL,
      email,
      organization,
      experience,
      message,
      role: "participent",
    };
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/contest-creator-req`,
        providerData
      );
      console.log(result.data);
      toast.success("Request has been submited");
    } catch (err) {
      toast.error(err?.response?.data?.messege);
    } finally {
      reset();
      closeModal();
    }
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              Become A Contest Provider!
            </DialogTitle>
            <div className="mt-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    defaultValue={user?.email}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Organization / Brand
                  </label>
                  <input
                    type="text"
                    {...register("organization", {
                      required: "Organization is required",
                    })}
                    className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Company or brand name"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Experience
                  </label>
                  <select
                    {...register("experience", {
                      required: "Please select experience",
                    })}
                    className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select experience</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Why do you want to create contests?
                  </label>
                  <textarea
                    rows="3"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Brief explanation..."
                  />
                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    type="submit"
                    className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ContestCreatorModal;
