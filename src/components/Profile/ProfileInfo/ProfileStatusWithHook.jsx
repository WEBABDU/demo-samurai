import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let dispatch = useDispatch();

  const activedEdit = () => {
    setEditMode(true);
  };
  const deactivedEdit = () => {
    setEditMode(false);
    dispatch(props.updateStatusProfile(status));
  };
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status)
  },[props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <span className={s.profileStatus} onDoubleClick={activedEdit}>{props.status || "--------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onChangeStatus}
            autoFocus
            onBlur={deactivedEdit}
            value={status}
            type="text"
          />
        </div>
      )}
    </div>
  );
};


export default ProfileStatusWithHook;
