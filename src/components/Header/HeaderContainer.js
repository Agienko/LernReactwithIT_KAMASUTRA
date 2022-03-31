import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {getAuthMe} from '../../redux/reducers/authReducer'


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.getAuthMe()  
    }
    render(){
        return  <Header {...this.props.auth}/>
    }
}

const mapStateToProps = state => ({auth: state.auth})

export default  connect(mapStateToProps, {getAuthMe})(HeaderContainer)