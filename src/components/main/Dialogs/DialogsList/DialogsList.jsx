import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogsList.module.scss';

const DialogsList = (props) => {
	return (
		<div className={styles.dialogs}>
			<ul>
				{props.dialogs.map((el) => {
					const id = el.id;
					const message = el.messagesAll[el.messagesAll.length - 1].message;
					return (
						<li className={styles.dialogItem} key={id}>
							<NavLink to={'/dialog/' + id}>
								<div className={styles.dialogLink}>
									<div className={styles.dialogPhoto}>
										<img src={props.photo} alt="" />
									</div>
									<div className={styles.dialogContent}>
										<div className={styles.dialogName}>{el.name}</div>
										<div className={styles.message}>{message}</div>
									</div>
								</div>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default DialogsList;
