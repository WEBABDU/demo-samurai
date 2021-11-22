import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likeCounts: 20 },
        { id: "2", message: "It's my first post", likeCounts: 50 },
        { id: "3", message: "It's my first post", likeCounts: 5 },
        { id: "4", message: "It's my first post", likeCounts: 500 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
      newMessage: "",
    },
    sideBarPage: {
      images: [
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWLgIQj7fc_3tK3Fa8pd3gnVZ8ySEdCDMFQ&usqp=CAU",
          alt: "girl",
          name: "Karina",
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-YSczX8Q3TcZpaZdWyTrW6GPoJLYPoROsQ&usqp=CAU",
          alt: "girl",
          name: "Angela",
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6lvstZb0YbnbgDHT83b6i_6LoeGfJn_WQA&usqp=CAU",
          alt: "girl",
          name: "Kamila",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};







window.store = store;
export default store;
