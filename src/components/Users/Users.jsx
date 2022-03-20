import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from './Users.module.css'

class Users extends React.Component {
  
componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=100')
    .then(response =>{
       this.props.onSetUsersClick(response.data.items)
        console.log(response.data)
    })
}




render(){
    return <div>
    <h2 className={styles.h2}>USERS</h2>

    <div className="pagination">1 2 3 4 5 </div>
    
    {this.props.usersPage.users.map(user => <UserItem 
        handleClick = {this.props.handleFollowClick}
        user={user} key={user.id}/>)}

    <div className={styles.btnWrapper}>
        <button >Show more</button>
    </div>
</div> 
}



}
    
export default Users;