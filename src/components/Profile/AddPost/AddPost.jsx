import React from "react";
import styles from './AddPost.module.css'
import Post from "../Post/Post";

const AddPost = (props) =>{
  const handlerChange = (e) =>{
        let body = e.target.value
        props.updateTextArea(body)
  }

  const onHandlerClick = () =>{
        props.addPost()
  }
  return  (
    <div className={styles.addPost}>
      <h2>My Posts</h2>
      <textarea  
        placeholder="your news..." 
        value={props.profilePage.newPostText}
        onChange={handlerChange}
      ></textarea>
      <div className={styles.btn}>
        <button onClick={onHandlerClick}>Send</button>
      </div>
        {props.profilePage.postsData
          .map(post => <Post message={post.message} likes={post.likes} key={post.id}/>)}
    </div>
  ) 
}

export default AddPost;