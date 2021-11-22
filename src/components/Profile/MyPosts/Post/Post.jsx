import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/564x/0f/ad/d5/0fadd5465b3520e06f61d69a951ae60d.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like </span> {props.likeCounts}
      </div>
    </div>
  );
};

export default Post;
