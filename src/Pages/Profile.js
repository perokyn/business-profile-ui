import React from "react";
import ProfileHeader from "../Components/ProfileHeader";
import Pricing from "../Components/Pricing";
import ProfileBackground from "../Assets/pofilebackground.jpg";
import ProfileImage from "../Assets/profileimage.jpg";

const Profile = (props) => {
  return (
    <>
      <ProfileHeader
        background={ProfileBackground}
        profileImage={ProfileImage}
        name="Filip Martin Jose"
        location="Los Angeles"
        level="Pro level"
      ></ProfileHeader>
     
      <Pricing />
    </>
  );
};
export default Profile;
