import React, { Component } from "react"
import CoreApp from "../CoreApp/CoreApp"
import SideMenu from "../SideMenu/SideMenu"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSideMenu: false,
    }
  }

  render() {
    const { showSideMenu } = this.state
    return (
      <div className="AppContainer">
        <SideMenu showSideMenu={showSideMenu} />
        <CoreApp
          showSideMenu={showSideMenu}
          toggleSideMenu={this.toggleSideMenu}
        />
      </div>
    )
  }

  toggleSideMenu = () => {
    this.setState({
      showSideMenu: !this.state.showSideMenu,
    })
  }
}

export default App
