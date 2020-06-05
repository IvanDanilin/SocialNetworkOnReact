import React from 'react'
import s from './ExistingPostsBlock.module.scss'
import ExistingPost from './ExistingPost/ExistingPost'

const ExistingPostsBlock = () => {
    return (
        <div className={s.existingPostsBlock}>
            <ExistingPost textPost='Hello! How are you?' />
            <ExistingPost textPost='Yo! My name is Ivan.' />
            <ExistingPost textPost='I like JS and React' />
            <ExistingPost textPost='Watafak, mazafaka, suka, blya!' />
            <ExistingPost textPost='
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Earum incidunt nam saepe unde similique, eaque quisquam
                nostrum ducimus aliquid quas illum ea amet dignissimos,
                impedit fugit nemo tenetur nobis architecto.' />
            <ExistingPost textPost='
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Earum incidunt nam saepe unde similique, eaque quisquam
                nostrum ducimus aliquid quas illum ea amet dignissimos,
                impedit fugit nemo tenetur nobis architecto.' />
            <ExistingPost textPost='
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Earum incidunt nam saepe unde similique, eaque quisquam
                nostrum ducimus aliquid quas illum ea amet dignissimos,
                impedit fugit nemo tenetur nobis architecto.' />
            <ExistingPost textPost='
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Earum incidunt nam saepe unde similique, eaque quisquam
                nostrum ducimus aliquid quas illum ea amet dignissimos,
                impedit fugit nemo tenetur nobis architecto.' />
            <ExistingPost textPost='
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Earum incidunt nam saepe unde similique, eaque quisquam
                nostrum ducimus aliquid quas illum ea amet dignissimos,
                impedit fugit nemo tenetur nobis architecto. 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt nam saepe unde similique, eaque quisquam nostrum ducimus aliquid quas illum ea amet dignissimos, impedit fugit nemo tenetur nobis architecto.' />
            <ExistingPost textPost='
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Earum incidunt nam saepe unde similique, eaque quisquam
                nostrum ducimus aliquid quas illum ea amet dignissimos,
                impedit fugit nemo tenetur nobis architecto.' />
        </div>
    )
}


export default ExistingPostsBlock
