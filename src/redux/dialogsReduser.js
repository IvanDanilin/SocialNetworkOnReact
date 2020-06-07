const GET_CURRENT_ID = "GET-CURRENT-ID";
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReduser = (state, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      // Записывает новое сообщение в state, обнуляет инпут и перерисовывает приложение
      const newMessageId =
        state.dialogsData[state.currentId].messagesAll.length;
      if (state.inputMessage) {
        state.dialogsData[state.currentId].messagesAll.push({
          id: newMessageId,
          message: state.inputMessage,
        });
      }
      state.inputMessage = "";
      break;

    case ON_MESSAGE_CHANGE:
      // Записывает в state и перерисовывыет любое изменение инпута нового сообщения
      state.inputMessage = action.textMessage;
      break;

    case GET_CURRENT_ID:
      // Получает текущий id пользователя, диалог с которым был открыт
      state.currentId = action.id;
      break;

    default:
      break;
  }

  return state;
};


export default dialogsReduser