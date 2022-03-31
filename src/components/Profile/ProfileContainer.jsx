import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfileThunk} from "../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import withAuthNavigate from "../hoc/withAuthNavigate";
import { compose } from "redux";

const ProfileAPI = props =>{
    const userId = useParams()['*'] || '22922';
    useEffect(() =>{ 
        props.getUserProfileThunk(userId)
    }, [])

    return <Profile {...props}/>
        
}

const mapStateToProps = state => ({profilePage: state.profilePage})


export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {getUserProfileThunk})  
)
(ProfileAPI)