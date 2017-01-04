import React, {Component} from "react"

class Header extends Component {
    render(){
        let { currentUser, isLoggedIn } = this.props
        return (
            <div>Header {currentUser} {isLoggedIn}</div>
        )
    }
}

export default Header