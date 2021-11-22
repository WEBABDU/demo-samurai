import { profileAPI, UsersAPI } from "../api/api";

const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const SET_STATUS_PROFILE = "samurai-network/profile/SET_STATUS_PROFILE";

let initialState = {
  posts: [],
  profile: null,
  status: "",
};

export let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newText = action.newPostText;

      return {
        ...state,
        posts: [...state.posts, { id: "5", message: newText, likeCounts: 0 }],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS_PROFILE: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS_PROFILE,
  status,
});

export const getProfile = (userId) => async (dispatch) => {
  const data = await UsersAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatusProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatusProfile = (status) => async (dispatch) => {
  console.log(status);
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
