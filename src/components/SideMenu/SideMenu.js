import React, { Component } from "react"
import styled from "styled-components"
import MENU_CONFIG from "./MenuConfig"
import "./SideMenu.css"

const SmallItem = styled.div`
  display: none;
  @media (max-width: ${props => props.size}px) {
    display: block;
  }
`
const BigItem = styled.div`
  display: block;
  @media (max-width: ${props => props.size}px) {
    display: none;
  }
`

class SideMenu extends Component {
  render() {
    const { showSideMenu } = this.props
    return (
      <div className={`SideMenu ${(showSideMenu && "show") || ""}`}>
        {MENU_CONFIG.map((conf, index) => {
          const { label, iconClass, style, imgUrl } = conf
          const itemStyle = {
            ...(imgUrl && {
              background: `url('${imgUrl}') no-repeat`,
              backgroundColor: "white",
              backgroundSize: "100%",
              borderRadius: "50%",
            }),
            animationDelay: 0.2 * index + "s",
            transitionDelay: 0.2 * index + "s",
          }

          return (
            <div key={label} className={"MenuContainer"} style={{ ...style }}>
              <SmallItem size={600} className={`MenuItem`} style={itemStyle}>
                {iconClass && (
                  <a>
                    <i
                      className={iconClass}
                      style={{
                        fontSize: "1.7rem",
                      }}
                    />
                  </a>
                )}
              </SmallItem>
              <BigItem size={600} className={`MenuItemBig`} style={itemStyle}>
                <span>
                  <i
                    className={iconClass}
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                  {label}
                </span>
              </BigItem>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SideMenu
