import React from 'react'
import BanishedCard from './BanishedCard'

class BanishedContainer extends React.Component {

  renderBanished = () => {
    return this.props.banishedPigs.map(banished => <BanishedCard banished={banished} />)
  }
  render(){
    return (
      <div className="banished ui three cards"
      style={this.props.showHiddenHogs ? {display: "flex"} : {display: "none"}}>
        {this.renderBanished()}
      </div>
    )
  }
}

export default BanishedContainer