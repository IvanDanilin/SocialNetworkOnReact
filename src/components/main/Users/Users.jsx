import React from "react";
import styles from "./Users.module.scss";
import Axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        ).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
        ).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.usersPage}>

                <div className={styles.pagination}>
                    {pages.map((p) => {
                        return (
                            <span className={this.props.currentPage === p && styles.selectedPage}
                                onClick={() => this.onPageChanged(p)}
                            >
                                {p}
                            </span>
                        );
                    })}
                </div>

                <div>
                    {this.props.users.map((u) => {
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
                                                this.props.unfollow(u.id);
                                            }}
                                            className={styles.button}
                                        >
                                            Unfollow
                                        </button>
                                    ) : (
                                            <button
                                                onClick={() => {
                                                    this.props.follow(u.id);
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
}

export default Users;
