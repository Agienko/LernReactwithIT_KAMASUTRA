import { connect } from "react-redux";
import {follow, unFollow, setUsers, setPageNum, setTotalCount, isLoading } from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";
import { getUsers } from "../../api/api";

class UsersAPI extends React.Component {
    componentDidMount(){
            this.props.isLoading(true)
        getUsers(this.props.usersPage.countOnPage,this.props.usersPage.currentPage)
        .then(data =>{
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
            this.props.isLoading(false)
        })
    }
    onChangePageClick(pageNum){
            this.props.isLoading(true)
            this.props.setPageNum(pageNum)
        getUsers(this.props.usersPage.countOnPage,pageNum)
        .then(data =>{
            this.props.setUsers(data.items)
            this.props.isLoading(false)
        })
    }
    render(){
        return <Users   usersPage={this.props.usersPage}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        onChangePageClick={this.onChangePageClick.bind(this)}
                />
        }
}   

const mapStateToProps = state =>({usersPage: state.usersPage,})

const UsersContainer = connect(mapStateToProps, {follow, unFollow,  setUsers, setPageNum, setTotalCount, isLoading})(UsersAPI)

export default UsersContainer;