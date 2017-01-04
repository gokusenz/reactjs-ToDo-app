import React, {Component} from "react"

class Header extends Component {
    render(){
        let { currentUser, isLoggedIn } = this.props
        return (
            <div>Header {this.props.currentUser}</div>
        )
    }
}

export default Header