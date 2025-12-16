import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../utils";
import toast from "react-hot-toast";

const UpdateProfileModal = ({ isOpen, closeModal, user }) => {
  const { register, handleSubmit } = useForm();
  const { updateUserProfile } = useAuth();

  const onSubmit = async (data) => {
    const { name, email, image } = data;
    const imgFile = image[0];

    let imageURL = user?.photoURL;
    if (imgFile) {
      imageURL = await imageUpload(imgFile);
    }

    console.log({ name, email, imageURL });
    await updateUserProfile(name, imageURL);
    toast.success("Profile updated");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              defaultValue={user?.displayName}
              type="text"
              {...register("name")}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              defaultValue={user?.email}
              type="email"
              {...register("email")}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-100"
            />
          </div>
          {/* Photo URL */}
          <div className="border-4 border-dotted border-gray-300 rounded-lg p-6 text-center">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                hidden
                {...register("image")}
              />
              <span className="inline-block bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600">
                Update Image
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 rounded-md border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
