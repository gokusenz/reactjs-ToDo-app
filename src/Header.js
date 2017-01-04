import React, {Component} from "react"

class Header extends Component {

    constructor(props) {
        super(props)
        this.handleHeaderClick = this.handleHeaderClick.bind(this)
    }

    handleHeaderClick() {
        alert(this.props.currentUser)
    }

    render(){
        let { currentUser, isLoggedIn } = this.props

        currentUser = "Logged in as " + currentUser
        return (
            <div onClick={this.handleHeaderClick}> { isLoggedIn && currentUser }</div>
        )
    }
}

export default Header;