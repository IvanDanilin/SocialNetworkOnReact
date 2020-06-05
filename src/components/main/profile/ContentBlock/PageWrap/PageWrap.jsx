import React from 'react'
import styles from './PageWrap.module.scss'
import avatar from './1551511784_4.jpg'

const PageWrap = () => {
    return (
        <div className={styles.pageWrap}>
            <div className={styles.avatar}>
                <img src={avatar} alt='avatar' />
            </div>
            <div className={styles.pageInfoWrap}>
                <div className={styles.pageName}>Ivan D.</div>
                <div className={styles.pageInfo}>
                    <div className={styles.pageInfoRow}>Date of Birth: 27th of March</div>
                    <div className={styles.pageInfoRow}>City: Moscow</div>
                    <div className={styles.pageInfoRow}>Education: SFedU'15</div>
                </div>
            </div>
        </div>
    )
}

export default PageWrap