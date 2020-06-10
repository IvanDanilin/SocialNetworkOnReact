import React from 'react';
import styles from './Users.module.scss'
import Axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <div className={styles.usersPage}>

                {
                    this.props.users.map((u) => {
                        return < div key={u.id} className={styles.userBlock} >
                            <div className={styles.photoBlock}>
                                <div className={styles.photo}><img src={
                                    u.photos.small ?
                                        u.photos.small
                                        : "https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg"
                                } alt="" /></div>

                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}
                                        className={styles.button}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}
                                        className={styles.button}>Follow</button>}

                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.name} >{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    })
                }

            </div >
        )
    }
}

export default Users