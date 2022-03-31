import { connect } from "react-redux";
import {getUsers, followUser, unFollowUser } from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";
import withAuthNavigate from "../hoc/withAuthNavigate";
import { compose } from "redux";

class UsersAPI extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.usersPage.countOnPage,this.props.usersPage.currentPage)
    }
    onChangePageClick(pageNum){
        this.props.getUsers(this.props.usersPage.countOnPage,pageNum)
    }
    render(){
        return <Users   usersPage={this.props.usersPage}
                        onChangePageClick={this.onChangePageClick.bind(this)}
                        followUser={this.props.followUser}
                        unFollowUser={this.props.unFollowUser}
                        isAuth={this.props.isAuth}
                />
        }
}   

const mapStateToProps = state =>({usersPage: state.usersPage})

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {getUsers, followUser, unFollowUser})
)(UsersAPI)
