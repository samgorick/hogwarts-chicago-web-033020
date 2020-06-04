import React from 'react'

class BanishedCard extends React.Component {

  render(){

    let baconImage = require("../hog-imgs/bacon.png")

    return (
      <div className="ui centered fluid card">
        <div className="image">
          <img src={baconImage} alt="bacon" />
          <p>RIP {this.props.banished}</p>
        </div>
      </div>
    )
  }
}

export default BanishedCard