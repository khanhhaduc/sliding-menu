import React, { Component } from "react"
import "./SideMenu.css"
import * as FontAwesome from "react-icons/lib/fa"

const MENU = [
  {
    label: "Profile",
    icon: "FaAsterisk",
    style: {
      top: "5%",
    },
  },
  {
    label: "Friends",
    icon: "FaAssistiveListeningSystems",
    style: {
      top: "40%",
    },
  },
  {
    label: "Star",
    icon: "FaStarO",
    style: {
      top: "50%",
    },
  },
  {
    label: "Conversations",
    icon: "FaCommentsO",
    style: {
      top: "60%",
    },
  },
  {
    label: "Settings",
    icon: "FaCog",
    style: {
      top: "85%",
    },
  },
]

class SideMenu extends Component {
  render() {
    const { showSideMenu } = this.props
    return (
      <div className={`SideMenu ${(showSideMenu && "show") || ""}`}>
        {MENU.map((conf, index) => {
          const { label, icon, style } = conf
          const Icon = FontAwesome[icon]
          return (
            <div
              key={label}
              className={"MenuItem"}
              style={{ ...style, animationDelay: 0.1 * index + "s" }}>
              <Icon
                color="white"
                style={{
                  width: "60%",
                  height: "60%",
                  top: "50%",
                  left: "50%",
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default SideMenu
