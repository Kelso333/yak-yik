import React, { Component } from 'react'

class Zone extends Component {
  render() {
    return (

      <div>
        
        <div>
          <h2><a href="#">{this.props.zone.name}</a></h2>
          <span>{this.props.zone.zipCode}</span><br />
          <span>{this.props.zone.numComments} comments</span>
        </div>
        
      </div>
    )
  }
}

export default Zone