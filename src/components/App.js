import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import PigContainer from "./PigContainer"
import BanishedContainer from "./BanishedContainer"

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs,
      hiddenHogs: [],
      showHiddenHogs: false
    }
  }

  hideHogs = (name) => {
    let visibleHogs = this.state.hogs.filter(hog => hog.name !== name )

    this.setState({
      hogs: visibleHogs,
      hiddenHogs: [...this.state.hiddenHogs, name]
    })
  }

  dealWithFilter = (event) => {
    if (event.target.value === "name"){
      let nameHogs = this.state.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        hogs: nameHogs
      })
    } else if (event.target.value === "weight"){
      let weightHogs = this.state.hogs.sort((a, b) => (a.weight < b.weight) ? 1 : -1)
      this.setState({
        hogs: weightHogs
      })
    } else if (event.target.checked === true) {
      let greasedHogs = this.state.hogs.filter(hog => hog.greased === true)
      this.setState({
        hogs: greasedHogs
      })
    } else if (event.target.checked === false) {
      this.setState({
        hogs: hogs
      })
    }
  }

  dealWithHidden = () => {
    this.setState({
      showHiddenHogs: !this.state.showHiddenHogs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter renderFiltered={this.dealWithFilter} renderHidden={this.dealWithHidden}/>
        <BanishedContainer banishedPigs={this.state.hiddenHogs} showHiddenHogs={this.state.showHiddenHogs}/>
        <PigContainer piggies={this.state.hogs} hideHogs={this.hideHogs}/>
      </div>
    );
  }
}

export default App;
