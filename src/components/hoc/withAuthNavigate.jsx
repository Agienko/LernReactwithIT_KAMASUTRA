import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const withAuthNavigate = Component =>{

    const mapStateToProps = state => ({isAuth: state.auth.isAuth})

    const NavigateComponent = props => ( 
       (!props.isAuth) ? <Navigate to={'/login/'} />  : <Component />
    )

   const ConnectedNavigateComponent = connect(mapStateToProps)(NavigateComponent)

   return ConnectedNavigateComponent
}

export default withAuthNavigate