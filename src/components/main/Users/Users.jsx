import React from "react";
import styles from "./Users.module.scss";

const Users = (props) =>  {
    return (
        <div className={styles.usersPage}>

            <div className={styles.pagination}>
                {props.pages.map((p) => {
                    return (
                        <span className={props.currentPage === p && styles.selectedPage}
                            onClick={() => props.onPageChanged(p)}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>

            <div>
                {props.users.map((u) => {
                    return (
                        <div key={u.id} className={styles.userBlock}>
                            <div className={styles.photoBlock}>
                                <div className={styles.photo}>
                                    <img
                                        src={
                                            u.photos.small
                                            || "https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg"
                                        }
                                        alt=""
                                    />
                                </div>

                                {u.followed ? (
                                    <button
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}
                                        className={styles.button}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                        <button
                                            onClick={() => {
                                                props.follow(u.id);
                                            }}
                                            className={styles.button}
                                        >
                                            Follow
                                        </button>
                                    )}
                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.name}>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export default Users;
