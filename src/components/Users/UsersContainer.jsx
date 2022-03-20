import Users from "./Users";
import { connect } from "react-redux";
import { subscribeUserAC, setUsersAC } from "../../redux/redusers/usersReducer";


const mapStateToProps = state =>{
    return {
       usersPage: state.usersPage 
    }
}

const mapDispatchToProps = dispatch =>{
    return {
       handleFollowClick: userId => dispatch(subscribeUserAC(userId)),
       onSetUsersClick: users => dispatch(setUsersAC(users))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;