import profileReducer, { addPostActionCreator } from "./profile_reducer"


it(`length of post should be increment`, () => {
  const state = {
    posts: [
      { id: "1", message: "Hi, how are you?", likeCounts: 20 },
      { id: "2", message: "It's my first post", likeCounts: 50 },
      { id: "3", message: "It's my first post", likeCounts: 5 },
      { id: "4", message: "It's my first post", likeCounts: 500 },
    ],
  }
  let action = addPostActionCreator('samurai');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5) 
})