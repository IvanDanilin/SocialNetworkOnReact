import React from 'react'
import topImage from "./../les_tuman_derevia.jpg";
import avatar from "./../1551511784_4.jpg"

const Profile = () => {
    return (
        <div className="content">
        <div className="topImage">
          <img src={topImage} alt="cover" />
        </div>
        <div className="content-block">
          <div className="avatar"> <img src={avatar} alt="avatar" /> </div>
          <div className="posts">
            posts
            <div> new post</div>
          </div>
        </div>
      </div>
    )
}

export default Profile