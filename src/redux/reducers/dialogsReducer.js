import { createSlice } from '@reduxjs/toolkit';

let initialState = [
	{
		id: 0,
		name: 'Abram Kuchera',
		messagesAll: [
			{
				id: 0,
				message: 'Lorem ipsum dolor sit amet.',
			},
			{
				id: 1,
				message: 'Lorem ipsum dolor sit amet.',
			},
			{
				id: 2,
				message: 'Lorem, ipsum dolor.',
			},
			{
				id: 3,
				message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 4,
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora placeat fugit modi asperiores officiis!',
			},
			{
				id: 5,
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut modi distinctio dolor magni. Debitis quasi itaque illum cumque, deserunt aliquid iusto accusantium rem veniam excepturi error provident, deleniti praesentium.',
			},
			{
				id: 6,
				message:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae! Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur. Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!',
			},
		],
	},
	{
		id: 1,
		name: 'Anna Milton',
		messagesAll: [
			{
				id: 0,
				message: 'Lorem ipsum dolor sit amet. 3===D',
			},
			{
				id: 1,
				message: 'Lorem ipsum dolor sit amet. 3===D',
			},
			{
				id: 2,
				message: 'Lorem, ipsum dolor.',
			},
			{
				id: 3,
				message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 4,
				message:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae! Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur. Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!',
			},
			{
				id: 5,
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora placeat fugit modi asperiores officiis!',
			},
			{
				id: 6,
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut modi distinctio dolor magni. Debitis quasi itaque illum cumque, deserunt aliquid iusto accusantium rem veniam excepturi error provident, deleniti praesentium.',
			},
			{
				id: 7,
				message: 'Lorem, ipsum.',
			},
			{
				id: 8,
				message: 'Lorem ipsum dolor sit.',
			},
		],
	},
	{
		id: 2,
		name: 'Alex Mormon',
		messagesAll: [
			{
				id: 0,
				message: 'Lorem ipsum dolor sit amet.',
			},
			{
				id: 1,
				message: 'Lorem ipsum dolor sit amet.',
			},
			{
				id: 2,
				message: 'Lorem, ipsum dolor.',
			},
			{
				id: 3,
				message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 4,
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora placeat fugit modi asperiores officiis!',
			},
			{
				id: 5,
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut modi distinctio dolor magni. Debitis quasi itaque illum cumque, deserunt aliquid iusto accusantium rem veniam excepturi error provident, deleniti praesentium.',
			},
			{
				id: 6,
				message:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae! Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur. Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!',
			},
			{
				id: 7,
				message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 8,
				message: 'Lorem, ipsum dolor.',
			},
			{
				id: 9,
				message: 'Lorem ipsum dolor sit amet.',
			},
			{
				id: 10,
				message: 'Lorem ipsum dolor sit',
			},
		],
	},
	{
		id: 3,
		name: 'Sarah Stinson',
		messagesAll: [
			{
				id: 0,
				message: 'Lorem.',
			},
			{
				id: 1,
				message: 'Lorem.',
			},
			{
				id: 2,
				message:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates iste placeat accusamus explicabo itaque? Totam culpa eum exercitationem iure quia cumque animi aliquid voluptates! Vel fugit ipsa amet quos facilis? Corrupti neque illum nisi soluta perspiciatis fugiat totam doloribus a sint repellat id deleniti maiores, labore sapiente obcaecati consequuntur quas quis odit voluptatum inventore? Placeat dignissimos recusandae voluptatem laborum magnam? Excepturi repudiandae, veritatis deserunt ut dolorum laboriosam ipsum voluptas perferendis maxime ullam neque quam architecto voluptatem rerum illum eaque consequuntur sit veniam voluptate eos qui asperiores. Unde officia blanditiis illum! Deleniti, temporibus deserunt excepturi facere ad libero dolore saepe blanditiis delectus quas dignissimos esse nisi quo magni? Deserunt dignissimos omnis error! Mollitia ut, nihil numquam est animi eligendi maxime omnis! Nihil fuga dolorum, obcaecati quod culpa provident commodi. Eaque unde tempora nam, libero suscipit quis neque deserunt rerum laboriosam possimus doloremque! Quibusdam, enim tempora blanditiis sunt quae distinctio consequatur facere! Doloremque quidem unde ducimus culpa totam quisquam sequi praesentium ab provident minus tenetur explicabo aut, fugiat commodi similique? Qui, praesentium dolorum dolor odio officiis voluptates eum incidunt corporis alias amet? Inventore, ullam dignissimos? Esse ad ipsa optio natus animi placeat exercitationem repellendus facilis, eius reiciendis vitae laborum quisquam ipsam excepturi dolor perferendis amet, alias, odio enim voluptas. Amet, architecto voluptatum!',
			},
			{
				id: 3,
				message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 4,
				message:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus veritatis quam alias fugiat iste sit repellendus culpa iusto ex asperiores, vero, non odit doloribus saepe eligendi maxime quae! Sapiente reprehenderit laboriosam, atque veniam doloribus iste eius corrupti vel quo quae magnam error, nostrum molestias esse nulla explicabo perspiciatis earum quia. Nostrum accusamus, alias qui molestiae distinctio dolores consequuntur. Praesentium facere, incidunt dolores mollitia ex impedit. Impedit voluptates amet exercitationem nobis fugit similique, asperiores commodi provident quibusdam itaque dolorum tenetur laboriosam, cumque numquam, vero veniam eius consequatur. Harum, blanditiis!',
			},
		],
	},
];

const { reducer, actions } = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		sendMessage: {
			reducer: (state, action) => {
				const userId = action.payload.userId;
				const newMessageId = state[userId].messagesAll.length;
				state[userId].messagesAll.push({
					id: newMessageId,
					message: action.payload.textMessage,
				});
			},
			prepare: (textMessage, userId) => ({
				payload: { textMessage, userId: +userId },
			}),
		},
	},
});

export default reducer;

export const { sendMessage } = actions;
