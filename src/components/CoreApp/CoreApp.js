import React, { Component } from "react"
import MessageList from "../MessageList/MessageList"
import "./CoreApp.css"
import FaAlignJustify from "react-icons/lib/fa/align-justify"

class CoreApp extends Component {
  render() {
    const { showSideMenu, toggleSideMenu } = this.props
    return (
      <div className={`CoreApp ${(showSideMenu && "is-moved") || ""}`}>
        <div className="header">
          <div className="MenuBtn" onClick={toggleSideMenu}>
            <FaAlignJustify style={{}} />
          </div>
          <span>Inbox</span>
        </div>
        <MessageList />
      </div>
    )
  }
}

export default CoreApp
