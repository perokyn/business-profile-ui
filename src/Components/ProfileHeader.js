import React from "react";

const ProfileHeader = (props) => {
  return (
    <div className=" bg-white border rounded-lg shadow-xl">
      <div className="relative flex justify-center bg-white ">
        <img className="w-full" alt="background" src={props.background}></img>
        <img
          className=" block rounded-full w-2/5 sm:w-40 border-4 border-white absolute mt-4 sm:mt-4 md:mt-12   "
          alt="profile"
          src={props.profileImage}
        ></img>
      </div>
      <div className="  p-4 text-center my-8 sm:my-2 ">
        <h2 className=" block font-semibold text-lg mt-5">{props.name}</h2>

        <label className=" block mb-3 text-gray-400">{props.location}</label>
        <label className="text-center bg-blue-700 px-5 py-1 text-white font-semibold rounded-full mb-3  ">
          {props.level}
        </label>

        <div className=" flex justify-around mt-10 text-center  text-gray-400 font-semibold">
          <label>
            Followers
            <span className="block text-3xl text-gray-500">980</span>
          </label>
          <label>
            Projects
            <span className="block text-3xl text-gray-500">142</span>
          </label>
          <label>
            Rank
            <span className="block text-3xl text-gray-500">129</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
