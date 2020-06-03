import React from 'react'
import s from './PageWrap.module.scss'
import avatar from "./1551511784_4.jpg"

const PageWrap = () => {
    return (
        <div className={s.pageWrap}>
            <div className={s.avatar}>
                <img src={avatar} alt="avatar" />
            </div>
            <div className={s.pageInfoWrap}>
                <div className={s.pageName}>Ivan D.</div>
                <div className={s.pageInfo}>
                    <div className={s.pageInfoRow}>Date of Birth: 27th of March</div>
                    <div className={s.pageInfoRow}>City: Moscow</div>
                    <div className={s.pageInfoRow}>Education: SFedU'15</div>
                </div>
            </div>
        </div>
    )
}

export default PageWrap