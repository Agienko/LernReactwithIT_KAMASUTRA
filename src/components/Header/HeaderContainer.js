import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuthMe} from '../../redux/reducers/authReducer'



class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            'withCredentials': true
        })
        .then(response =>{
                response.data.resultCode || this.props.setAuthMe(response.data.data)
            }
        )
    }


    render(){
        return  <Header {...this.props.auth}/>
    }
   
}

const mapStateToProps = state => ({auth: state.auth})

export default  connect(mapStateToProps, {setAuthMe})(HeaderContainer)    ;