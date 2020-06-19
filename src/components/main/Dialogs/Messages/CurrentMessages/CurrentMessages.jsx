import React from 'react';
import styles from './CurrentMessages.module.scss';

const CurrentMessages = (props) =>
	props.messages.map((messageEl) => (
		<div key={messageEl.id} className={styles.message}>
			{messageEl.message}
		</div>
	));

export default CurrentMessages;
