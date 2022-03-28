import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from './Users.module.css'

const Users = props => {
   
    const pages = [];
    for(let i = 1; i <=props.usersPage.totalPages; i++) pages.push(i)   
    
    return <div>
    <h2 className={styles.h2}>USERS</h2>

    <div className={styles.pagination}>
        {pages.map(pageNum =>(
            pageNum === props.usersPage.currentPage 
            ? <div key={pageNum} className={styles.selected}>{pageNum}</div>
            : <div onClick={() => props.onChangePageClick(pageNum)} key={pageNum}>{pageNum}</div>))}
    </div>

    {props.usersPage.users.map(user => <UserItem 
        handleClick = {props.handleFollowClick}
        user={user} key={user.id}/>)}

    <div className={styles.btnWrapper}>
        <button >Show more</button>
    </div>
</div> 
}

    
export default Users;

