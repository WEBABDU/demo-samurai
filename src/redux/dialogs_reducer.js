const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: "1", name: "Dimych" },
    { id: "2", name: "Andrey" },
    { id: "3", name: "Sveta" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Viktor" },
    { id: "6", name: "Valere" },
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is your It" },
    { id: "3", message: "Yoooo" },
    { id: "4", message: "Yoooo" },
    { id: "5", message: "Yoooo" },
  ],
};

let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: "6", message: body }],
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
