import React from 'react'
import s from './Music.module.scss'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import PageInDevelopment from '../../common/PageInDevelopment/PageInDevelopment'
import useScrollToTop from '../../../utilities/useScrollToTop'

const Music = () => {
    useScrollToTop()
    return (
        <div className={s.music}>
            <PageInDevelopment />
        </div>
    )
}


export default withAuthRedirect(Music)