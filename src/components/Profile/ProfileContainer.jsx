import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile} from "../../redux/reducers/profileReducer";
import {  useParams } from "react-router-dom";
import { getUserProfile } from "../../api/api";


const ProfileAPI = props =>{
    const userId = useParams()['*'] || '2';
    useEffect(() =>{ 
        getUserProfile(userId)
        .then(data => props.setUserProfile(data) )
    }, [])

    return <Profile {...props}/>
        
}

const mapStateToProps = state => ({profilePage: state.profilePage})



const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPI) 

export default ProfileContainer