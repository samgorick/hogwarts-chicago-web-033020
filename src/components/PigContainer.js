import React from "react";
import PigCard from './PigCard'

class PigContainer extends React.Component {

  renderPigs = () => {
    return this.props.piggies.map(pig => <PigCard pigData={pig} key={pig.name} hideHogs={this.props.hideHogs}/>)
  }

  render(){
    return (
      <div className="ui three cards">
        {this.renderPigs()}
      </div>
    )
  }
}

export default PigContainer