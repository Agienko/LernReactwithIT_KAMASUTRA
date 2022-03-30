import { connect } from "react-redux";
import {follow, unFollow, toggleInProgress, getUsersThunkCreator } from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";

class UsersAPI extends React.Component {
    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.usersPage.countOnPage,this.props.usersPage.currentPage)
    }
    onChangePageClick(pageNum){
        this.props.getUsersThunkCreator(this.props.usersPage.countOnPage,pageNum)
    }
    render(){
        return <Users   usersPage={this.props.usersPage}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        onChangePageClick={this.onChangePageClick.bind(this)}
                        toggleInProgress={this.props.toggleInProgress}
                />
        }
}   

const mapStateToProps = state =>({usersPage: state.usersPage,})

const UsersContainer = connect(mapStateToProps, {follow, unFollow, toggleInProgress, getUsersThunkCreator})(UsersAPI)

export default UsersContainer;