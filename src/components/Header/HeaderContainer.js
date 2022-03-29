import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuthMe} from '../../redux/reducers/authReducer'
import { getAuthMe } from "../../api/api";



class HeaderContainer extends React.Component{
    componentDidMount(){
        getAuthMe().then(data =>{
            if (data.resultCode === 0)  this.props.setAuthMe(data.data)
            }
        )
    }


    render(){
        return  <Header {...this.props.auth}/>
    }
   
}

const mapStateToProps = state => ({auth: state.auth})

export default  connect(mapStateToProps, {setAuthMe})(HeaderContainer)    ;