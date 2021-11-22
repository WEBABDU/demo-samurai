import React from "react";
import Preloder from "../../cammon/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloder />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatusWithHook
          status={props.status}
          updateStatusProfile={props.updateStatusProfile}
        />
        <p className={s.pfofileName}>{props.profile.fullName}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
