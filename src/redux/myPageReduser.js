const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

const myPageReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      // Добавляет новый пост на стену
      if (state.newPostText) {
        const newPostId = state.existingPosts.length;
        state.existingPosts.push({
          id: newPostId,
          textPost: state.newPostText,
          amountLikes: 0,
        });
        state.newPostText = "";
      }
      break;

    case ON_POST_CHANGE:
      // Записывает в state и перерисовывыет любое изменение инпута нового поста
      state.newPostText = action.textPost;
      break;

    default:
      break;
  }

  return state;
};

export default myPageReduser;




export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => ({
  type: ON_POST_CHANGE,
  textPost: text,
});
