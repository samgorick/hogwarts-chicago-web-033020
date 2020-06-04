import React from 'react'

class PigCard extends React.Component {

  constructor(){
    super()

    this.state = {
      moreInfo: false
    }
  }

  imageData = (str) => {
    let replaced = str.replace(/ /g, "_")
    return replaced.toLowerCase()
  }

  handleMoreInfo = () => {
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }

  render(){
    const {name, specialty, weight, medal} = this.props.pigData

    let pigImage = require(`../hog-imgs/${this.imageData(name)}.jpg`)

    return (
    <div className="ui card pigTile">
      <div className="image">
        <img src={pigImage} alt={name}/>
      </div>
      <div className="content">
        <h3>Name: {name}</h3>
        <p>Specialty: {specialty}</p>
        <div className="description" style={this.state.moreInfo ? {display: "block"} : { display: "none"}}>
          <p>Highest Medal Achieved: {medal}</p>
          <p>Weight: {weight}</p> 
        </div>
      </div>
      <div className="extra content">
        <button className="ui button" onClick={this.handleMoreInfo}>
          {this.state.moreInfo ? "Less Info" : "More Info"}
        </button>
        <button className="ui button" onClick={() => {this.props.hideHogs(name)}}>
          Hide Me
        </button>
      </div>
    </div>
    )
  }
}

export default PigCard