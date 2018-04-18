import React, { Component } from "react"
import Icon from "react-icons-kit"
import { software_paragraph_justify_all } from "react-icons-kit/linea/software_paragraph_justify_all"

import MessageList from "../MessageList/MessageList"
import "./CoreApp.css"

class CoreApp extends Component {
  render() {
    const { showSideMenu, toggleSideMenu } = this.props
    return (
      <div className={`CoreApp ${(showSideMenu && "is-moved") || ""}`}>
        <div className="header">
          <div className="MenuBtn" onClick={toggleSideMenu}>
            <Icon
              style={{
                marginTop: "10px",
              }}
              icon={software_paragraph_justify_all}
              size={22}
            />
          </div>
          <span className="title">Inbox</span>
        </div>
        <MessageList />
      </div>
    )
  }
}

export default CoreApp
