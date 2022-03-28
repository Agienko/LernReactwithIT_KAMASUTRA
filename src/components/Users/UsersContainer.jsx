import { connect } from "react-redux";
import { subscribeUser, setUsers, setPageNum, setTotalCount, isLoading } from "../../redux/reducers/usersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";


class UsersAPI extends React.Component {
    componentDidMount(){
        this.props.isLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.countOnPage}&page=${this.props.usersPage.currentPage}`)
        .then(response =>{
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        this.props.isLoading(false)
        })
    }
    onChangePageClick(pageNum){
        this.props.isLoading(true)
        this.props.setPageNum(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.countOnPage}&page=${pageNum}`)
        .then(response =>{
        this.props.setUsers(response.data.items)
        this.props.isLoading(false)
        })
    }
    render(){
        return <Users   usersPage={this.props.usersPage}
                        subscribeUser={this.props.subscribeUser}
                        onChangePageClick={this.onChangePageClick.bind(this)}
                />
        }
}   


const mapStateToProps = state =>({
        usersPage: state.usersPage,
    })


const UsersContainer = connect(mapStateToProps, {subscribeUser, setUsers, setPageNum, setTotalCount, isLoading})(UsersAPI)


export default UsersContainer;