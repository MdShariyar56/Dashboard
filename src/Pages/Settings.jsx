import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";

const ProfileSettings = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="min-h-screen bg-[#111B3C] p-2 md:p-0  font-sans ">
      <div className="flex gap-8 mb-10 border-b border-gray-800">
        <button className="pb-3 text-[#FFFFFF] text-sm lg:text-2xl font-semibold">
          Profile
        </button>
        <button className="pb-3 text-[#FFFFFF] text-sm lg:text-2xl font-semibold ">
          Password Settings
        </button>
      </div>

      <div className="max-w-4xl">
        <div className="mb-10">
          <p className="text-[#FFFFFF]  text-sm lg:text-lg mb-4">
            Profile Image
          </p>

          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://i.ibb.co/VYCWzyw9/Elipse-5.png"
                alt="Profile"
                className="w-22 h-22 rounded-full object-cover border-2 border-blue-500/20"
              />

              {isEditing && (
                <div className="absolute -bottom-2 -right-2 bg-[#7AA3CC] text-[#FFFFFF] p-1.5 rounded-lg border-2 border-[#0d1224]">
                  <BiEdit color="white" size={20} />
                </div>
              )}
            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="btn relative right-3 top-6 btn-xs rounded-full px-4 bg-[#111B3C]  shadow-[inset_0_2px_10px_rgba(210,234,255,0.9)] text-[#FFFFFF] "
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 border-b  border-gray-800 pb-4">
            <label className="text-2xl md:w-56 shrink-0">Full Name:</label>
            {isEditing ? (
              <input
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
                className="input input-bordered w-90  bg-[#161d31] border-gray-700 focus:border-blue-500"
              />
            ) : (
              <span className="text-gray-200 text-2xl">{profile.fullName}</span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-800 pb-4">
            <label className="text-2xl md:w-56 shrink-0">Email:</label>
            {isEditing ? (
              <input
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="input input-bordered w-90 bg-[#161d31] border-gray-700 focus:border-blue-500"
              />
            ) : (
              <span className="text-gray-200 text-2xl">{profile.email}</span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-800 pb-4">
            <label className="text-2xl md:w-56 shrink-0">Store Name:</label>
            {isEditing ? (
              <input
                name="storeName"
                value={profile.storeName}
                onChange={handleInputChange}
                className="input input-bordered w-90 bg-[#161d31] border-gray-700 focus:border-blue-500"
              />
            ) : (
              <span className="text-gray-200 text-2xl">
                {profile.storeName}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-800 pb-4">
            <label className="text-2xl md:w-56 shrink-0">Store Address:</label>
            {isEditing ? (
              <input
                name="storeAddress"
                value={profile.storeAddress}
                onChange={handleInputChange}
                className="input input-bordered w-90 bg-[#161d31] border-gray-700 focus:border-blue-500"
              />
            ) : (
              <span className="text-gray-200 text-2xl">
                {profile.storeAddress}
              </span>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsEditing(false)}
              className="btn bg-[#00c853] hover:bg-[#00a846] text-[#FFFFFF] border-none px-26 rounded-xl text-lg h-12"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
