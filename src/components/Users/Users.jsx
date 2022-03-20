import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from './Users.module.css'

class Users extends React.Component {
  
componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.countOnPage}&page=${this.props.usersPage.currentPage}`)
    .then(response =>{
       this.props.setUsers(response.data.items)
       this.props.setTotalCount(response.data.totalCount)
    })
}

onChangePageClick(pageNum){
    this.props.onChangePageClick(pageNum)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.countOnPage}&page=${pageNum}`)
    .then(response =>{
       this.props.setUsers(response.data.items)
    })
}



render(){
    console.log(this.props)
    const pages = [];
    for(let i = 1; i <=this.props.usersPage.totalPages; i++){
        pages.push(i)
    }
    return <div>
    <h2 className={styles.h2}>USERS</h2>

    <div className={styles.pagination}>
        {pages.map(pageNum =>{
            return pageNum === this.props.usersPage.currentPage 
                    ? <div key={pageNum} className={styles.selected}>{pageNum}</div>
                    : <div onClick={() => this.onChangePageClick(pageNum)} key={pageNum}>{pageNum}</div>
        })}
    </div>

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