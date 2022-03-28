import React from "react";
import styles from './AddMessage.module.css'


const AddMessage = (props) =>{

  const handlerChange =(e)=> props.updateMessage(e.target.value)
  
    return (
      <div className={styles.messages}>
        {props.messagesPage.messagesData.map(message => 
          <div className={styles.messageWrap} key={message.id}>
              <div className={styles.userAvatar}>
                {message.user}
              </div>
              <div className={styles.userMessage}>
                {message.message}
              </div>
          </div>)}

          <div className={styles.addPost}>
            <h3>Send Message</h3>
            <textarea  
              placeholder="your message..." 
              value={props.messagesPage.newMessageText} 
              onChange={handlerChange}
            ></textarea>
            <div className={styles.btn}>
                <button onClick={ props.addMessage }>Send</button>
            </div>
          </div>
      </div>
    ) 
}

export default AddMessage;