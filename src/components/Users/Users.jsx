import React from "react";
import Paginator from "../cammon/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

const Users = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  ...props
}) => {
  console.log(users);
  return (
    <div className={s.usersContent}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div className={s.userContent}>
        {users.map((u) => (
          <>
            <User
              key={u.id}
              user={u}
              isFollowingProgress={props.isFollowingProgress}
              unfollow={props.unfollow}
              follow={props.follow}
            />
            <div  className={s.line}></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
