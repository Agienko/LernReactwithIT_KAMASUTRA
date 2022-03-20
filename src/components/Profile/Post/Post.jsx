import React from "react";
import styles from './Post.module.css'

const Post = (props) =>{
    return  (
        <div className={styles.post}>
          <img src="https://avatars.mds.yandex.net/i?id=436622d9e290fdc33f58c005e2ab3141-5539133-images-thumbs&n=13" alt="avatar"/>
          <span>{props.message}</span>
          <div>
            <span><em>{props.likes}</em> </span>
           <img 
           src="https://cdn.icon-icons.com/icons2/1097/PNG/128/1485477009-like_78561.png"
           alt="like"/>
            </div>
        </div>
        
    )
}

export default Post;