import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, isFollowingProgress, unfollow, follow }) => {
  return (
    <div className={s.userItem}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="avatar"
              className={s.avatar}
            />
          </NavLink>
        </div>
        <div className={s.userData}>
          {user.followed ? (
            <button
              className={s.followUnfollow}
              disabled={isFollowingProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={s.followUnfollow}
              disabled={isFollowingProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>
            <p className={s.userName}>{user.name}</p>
          </div>
          <div>
            <p className={s.userStatus}>{user.status}</p>
          </div>
        </span>
      </span>
    </div>
  );
};

export default User;
