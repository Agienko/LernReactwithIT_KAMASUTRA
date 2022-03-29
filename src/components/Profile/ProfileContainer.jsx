import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile} from "../../redux/reducers/profileReducer";
import {  useParams } from "react-router-dom";


const ProfileAPI = props =>{
    const userId = useParams()['*'] || '2';
    useEffect(() =>{ 
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => props.setUserProfile(response.data) )
    }, [])

    return <Profile {...props}/>
        
}

const mapStateToProps = state => ({profilePage: state.profilePage})



const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPI) 

export default ProfileContainer