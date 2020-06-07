
const ADD_POST = 'ADD-POST';
const GET_CURRENT_ID = 'GET-CURRENT-ID';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
  _state: {
    dialogsData: [
      {
        id: 0,
        name: "Abram Kuchera",
        messagesAll: [
          {
            id: 0,
            message: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 1,
            message: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 2,
            message: "Lorem, ipsum dolor.",
          },
          {
            id: 3,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          },
          {
            id: 4,
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora placeat fugit modi asperiores officiis!",
          },
          {
            id: 5,
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut modi distinctio dolor magni. Debitis quasi itaque illum cumque, deserunt aliquid iusto accusantium rem veniam excepturi error provident, deleniti praesentium.",
          },
          {
            id: 6,
            message:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae!\
                Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur.\
                Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!",
          },
        ],
      },
      {
        id: 1,
        name: "Anna Milton",
        messagesAll: [
          {
            id: 0,
            message: "Lorem ipsum dolor sit amet. 3===D",
          },
          {
            id: 1,
            message: "Lorem ipsum dolor sit amet. 3===D",
          },
          {
            id: 2,
            message: "Lorem, ipsum dolor.",
          },
          {
            id: 3,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          },
          {
            id: 4,
            message:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae!\
                Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur.\
                Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!",
          },
          {
            id: 5,
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora placeat fugit modi asperiores officiis!",
          },
          {
            id: 6,
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut modi distinctio dolor magni. Debitis quasi itaque illum cumque, deserunt aliquid iusto accusantium rem veniam excepturi error provident, deleniti praesentium.",
          },
          {
            id: 7,
            message: "Lorem, ipsum.",
          },
          {
            id: 8,
            message: "Lorem ipsum dolor sit.",
          },
        ],
      },
      {
        id: 2,
        name: "Alex Mormon",
        messagesAll: [
          {
            id: 0,
            message: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 1,
            message: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 2,
            message: "Lorem, ipsum dolor.",
          },
          {
            id: 3,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          },
          {
            id: 4,
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora placeat fugit modi asperiores officiis!",
          },
          {
            id: 5,
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut modi distinctio dolor magni. Debitis quasi itaque illum cumque, deserunt aliquid iusto accusantium rem veniam excepturi error provident, deleniti praesentium.",
          },
          {
            id: 6,
            message:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae!\
                Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur.\
                Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!",
          },
          {
            id: 7,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          },
          {
            id: 8,
            message: "Lorem, ipsum dolor.",
          },
          {
            id: 9,
            message: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 10,
            message: "Lorem ipsum dolor sit",
          },
        ],
      },
      {
        id: 3,
        name: "Sarah Stinson",
        messagesAll: [
          {
            id: 0,
            message: "Lorem.",
          },
          {
            id: 1,
            message: "Lorem.",
          },
          {
            id: 2,
            message:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates iste placeat accusamus explicabo itaque? Totam culpa eum exercitationem iure quia cumque animi aliquid voluptates! Vel fugit ipsa amet quos facilis?\
                Corrupti neque illum nisi soluta perspiciatis fugiat totam doloribus a sint repellat id deleniti maiores, labore sapiente obcaecati consequuntur quas quis odit voluptatum inventore? Placeat dignissimos recusandae voluptatem laborum magnam?\
                Excepturi repudiandae, veritatis deserunt ut dolorum laboriosam ipsum voluptas perferendis maxime ullam neque quam architecto voluptatem rerum illum eaque consequuntur sit veniam voluptate eos qui asperiores. Unde officia blanditiis illum!\
                Deleniti, temporibus deserunt excepturi facere ad libero dolore saepe blanditiis delectus quas dignissimos esse nisi quo magni? Deserunt dignissimos omnis error! Mollitia ut, nihil numquam est animi eligendi maxime omnis!\
                Nihil fuga dolorum, obcaecati quod culpa provident commodi. Eaque unde tempora nam, libero suscipit quis neque deserunt rerum laboriosam possimus doloremque! Quibusdam, enim tempora blanditiis sunt quae distinctio consequatur facere!\
                Doloremque quidem unde ducimus culpa totam quisquam sequi praesentium ab provident minus tenetur explicabo aut, fugiat commodi similique? Qui, praesentium dolorum dolor odio officiis voluptates eum incidunt corporis alias amet?\
                Inventore, ullam dignissimos? Esse ad ipsa optio natus animi placeat exercitationem repellendus facilis, eius reiciendis vitae laborum quisquam ipsam excepturi dolor perferendis amet, alias, odio enim voluptas. Amet, architecto voluptatum!",
          },
          {
            id: 3,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          },
          {
            id: 4,
            message:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae!\
                Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur.\
                Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!",
          },
        ],
      },
    ],
    posts: [
      { id: 0, textPost: "Hello! How are you?", amountLikes: 54 },
      { id: 1, textPost: "Yo! My name is Ivan.", amountLikes: 64 },
      { id: 2, textPost: "I like JS and React", amountLikes: 516 },
      { id: 3, textPost: "Watafak, mazafaka, suka, blya!", amountLikes: 5 },
      {
        id: 4,
        textPost:
          "\
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
    Earum incidunt nam saepe unde similique, eaque quisquam\
    nostrum ducimus aliquid quas illum ea amet dignissimos,\
    impedit fugit nemo tenetur nobis architecto.",
        amountLikes: 32,
      },
      {
        id: 5,
        textPost:
          "\
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
    Earum incidunt nam saepe unde similique, eaque quisquam\
    nostrum ducimus aliquid quas illum ea amet dignissimos,\
    impedit fugit nemo tenetur nobis architecto. \
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
    Earum incidunt nam saepe unde similique, eaque quisquam\
    nostrum ducimus aliquid quas illum ea amet dignissimos,\
    impedit fugit nemo tenetur nobis architecto.",
        amountLikes: 32,
      },
      {
        id: 6,
        textPost:
          "\
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
    Earum incidunt nam saepe unde similique, eaque quisquam\
    nostrum ducimus aliquid quas illum ea amet dignissimos,\
    impedit fugit nemo tenetur nobis architecto.",
        amountLikes: 32,
      },
    ],
    inputMessage: "",
    currentId: 0,
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  //Подписчик, принимает функцию рендера всего приложения из файла index.js
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST' }
    switch (action.type) {
      case ADD_POST:
        // Добавляет новый пост на стену
        const newPostId = this._state.posts.length;
        this._state.posts.push({
          id: newPostId,
          textPost: action.text,
          amountLikes: 0,
        });
        this._callSubscriber();
        break;
      case SEND_MESSAGE:
        // Записывает новое сообщение в state, обнуляет инпут и перерисовывает приложение
        const newMessageId = this._state.dialogsData[this._state.currentId]
          .messagesAll.length;
        if (this._state.inputMessage) {
          this._state.dialogsData[this._state.currentId].messagesAll.push({
            id: newMessageId,
            message: this._state.inputMessage,
          });
        }
        this._state.inputMessage = "";
        this._callSubscriber();
        break;
      case ON_MESSAGE_CHANGE:
        // Записывает в state и перерисовывыет любое изменение инпута нового сообщения
        this._state.inputMessage = action.textMessage;
        this._callSubscriber();
        break;
      case GET_CURRENT_ID:
        // Получает текущий id пользователя, диалог с которым был открыт
        this._state.currentId = action.id;
        break;

      default:
        break;
    }
  },
};


export const addPostActionCreator = (text) => ({ type: ADD_POST, text: text })

export const getCurrentIdActionCreator = (id) => ({type: GET_CURRENT_ID, id: id})

export const onMessageChangeActionCreator = (text) => ({ type: ON_MESSAGE_CHANGE, textMessage: text })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })


export default store;
