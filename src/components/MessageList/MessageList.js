import React, { Component } from "react"
import data from "../../helpers/data"
import "./MessageList.css"

class MessageList extends Component {
  render() {
    return (
      <div className={"ListContainer"}>
        <ul>
          {(!!data.length &&
            data.map((msg, index) => {
              return <li key={msg.message}>{msg.message}</li>
            })) || <li>No Message Yet</li>}
        </ul>
      </div>
    )
  }
}

export default MessageList
