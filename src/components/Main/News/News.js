import React from 'react'
import s from './News.module.scss'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

const News = () => {
    return (
        <div className={s.news}>
            News
        </div>
    )
}

export default withAuthRedirect(News)