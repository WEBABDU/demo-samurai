import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requared } from "../../../utils/validators/validators";
import { Textarea } from "../../cammon/FormsControl/formsControl";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p,index) => (
    <Post key={index} message={p.message} likeCounts={p.likeCounts} />
  ));

  let addPostValues = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = ''
  };

  return (
    <div>
      <div>
        <div className={s.postsBlock}>
          <h3>My post</h3>
        </div>
        <MyPostsFormRedux onSubmit={addPostValues} />
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
 
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder="Enter your post"
          validate={[requared,maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let MyPostsFormRedux = reduxForm({ form: "profileMyPostsForm" })(MyPostsForm);

export default MyPosts;
