import { connect } from "react-redux";
import { subscribeUserAC, setUsersAC, setPageNumAC, setTotalCountAC } from "../../redux/reducers/usersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";



class UsersAPI extends React.Component {
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
    return <Users   usersPage={this.props.usersPage}
                    handleFollowClick={this.props.handleFollowClick}
                    onChangePageClick={this.onChangePageClick.bind(this)}
            />
    }
}   




const mapStateToProps = state =>({
        usersPage: state.usersPage,
    })

const mapDispatchToProps = dispatch =>({
       handleFollowClick: userId => dispatch(subscribeUserAC(userId)),
       setUsers: users => dispatch(setUsersAC(users)),
       onChangePageClick: pageNum => dispatch(setPageNumAC(pageNum)),
       setTotalCount: totalPages => dispatch(setTotalCountAC(totalPages)),
    })


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)


export default UsersContainer;