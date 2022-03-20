import Users from "./Users";
import { connect } from "react-redux";
import { subscribeUserAC, setUsersAC, setPageNumAC, setTotalCountAC } from "../../redux/redusers/usersReducer";


const mapStateToProps = state =>{
    return {
        usersPage: state.usersPage,

    }
}

const mapDispatchToProps = dispatch =>{
    return {
       handleFollowClick: userId => dispatch(subscribeUserAC(userId)),
       setUsers: users => dispatch(setUsersAC(users)),
       onChangePageClick: pageNum => dispatch(setPageNumAC(pageNum)),
       setTotalCount: totalPages => dispatch(setTotalCountAC(totalPages)),
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;