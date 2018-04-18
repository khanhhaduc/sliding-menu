import React, { Component } from "react"
import Icon from "react-icons-kit"
import { ic_query_builder } from "react-icons-kit/md/ic_query_builder"
import moment from "moment"
import data from "../../helpers/MockData"
import "./MessageList.css"

class MessageList extends Component {
  render() {
    return (
      <div className={"ListContainer"}>
        <ul className="list">
          {(!!data.length && [
            <li key="spacer" className="listItem spacer" />,
            ...data.map((msg, index) => {
              const { id, message, user, avatar, timestamp } = msg
              return (
                <li key={id} className="listItem">
                  <div
                    className="avatar"
                    style={{
                      background: `url('${avatar}') no-repeat`,
                      backgroundSize: "100%",
                    }}
                  />
                  <span className="username">{user}</span>
                  <span className="message">{message}</span>
                  <span className="timestamp">
                    <Icon
                      size={13}
                      icon={ic_query_builder}
                      style={{ marginRight: "5px" }}
                    />
                    {moment(timestamp).fromNow()}
                  </span>
                </li>
              )
            }),
          ]) || <li>No Message Yet</li>}
        </ul>
      </div>
    )
  }
}

export default MessageList
