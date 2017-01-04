import React, {Component} from "react"
import Todoitem from "./Todoitem"

class Todolist extends Component {
    render() {
        return (
            <div>
            <ul>
                <li><Todoitem /></li>
            </ul>
            </div>
        )
    }
}

export default Todolist;