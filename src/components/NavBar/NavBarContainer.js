import { connect } from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = state => ({
    navBarPage: state.navBarPage
})

const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer