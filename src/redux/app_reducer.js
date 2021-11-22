import { getLogin } from "./auth_reducer";

const INITILIZED_SUCCES = "INITILIZED_SUCCES";

let initialState = {
  initialized: false,
};

export let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITILIZED_SUCCES: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

export let initilizedSucces = () => ({
  type: INITILIZED_SUCCES,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getLogin());
  Promise.all([promise]).then( () => {
    dispatch(initilizedSucces());
  })
};
