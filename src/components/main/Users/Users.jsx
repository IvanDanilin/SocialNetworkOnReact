import React from 'react';
import styles from './Users.module.scss'

const Users = (props) => {

    const usery = [
        {
            id: 1,
            followed: false,
            photoUrl: "https://illustrators.ru/uploads/illustration/image/1179422/main_%D0%9A%D0%9E%D0%9D%D0%95%D0%A7%D0%9D%D0%AB%D0%99_.png",
            fullName: "Ivan",
            status: "I am a status",
            location: { city: "Moscow", country: "Russia" },
        },
        {
            id: 2,
            followed: true,
            photoUrl:
                "https://sun9-38.userapi.com/c624931/v624931099/927b/3ipJYpmfb5I.jpg?ava=1",
            fullName: "Maria",
            status: "Hello",
            location: { city: "Kirov", country: "Ukraine" },
        },
        {
            id: 3,
            followed: false,
            photoUrl:
                "https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg",
            fullName: "Victor",
            status: "I am the best!",
            location: { city: "Odessa", country: "Ukraine" },
        },
        {
            id: 4,
            followed: true,
            photoUrl: "https://pristor.ru/wp-content/uploads/2019/09/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B0%D0%B2%D0%B0-%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D1%84%D0%BE%D1%82%D0%BA%D0%B8-24.jpg",
            fullName: "Anna",
            status: "I like coffee",
            location: { city: "Minsk", country: "Belorus" },
        },
        {
            id: 5,
            followed: false,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoHxugAhkrE-gEmXhTO6_m2f-TZFUPlkAX5_Dmgve67lsVuRB-&usqp=CAU",
            fullName: "Victoria",
            status: "Nice day to you",
            location: { city: "Rostov-on-Don", country: "Russia" },
        },
    ]
    if (props.users.length === 0) {
        props.setUsers(usery)
    }


    return (
        <div className={styles.usersPage}>
            {
                props.users.map((u) => {
                    return < div key={u.id} className={styles.userBlock} >
                        <div className={styles.photoBlock}>
                            <div className={styles.photo}><img src={u.photoUrl} alt="" /></div>

                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}
                                    className={styles.button}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}
                                    className={styles.button}>Follow</button>}

                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.name} >{u.fullName}</div>
                            <div>"{u.status}"</div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default Users