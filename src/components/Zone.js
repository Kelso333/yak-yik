import React, { Component } from 'react'

class Zone extends Component {
  render() {
    return (

      <div>
        
        <div style={{padding:16}}>
          <h2 style={{marginBottom:5}}><a style={{textDecoration:'none', color:'red'}} href="#">{this.props.currentZone.name}</a></h2>
          <span>{this.props.currentZone.zipCode}</span><br />
          <span>{this.props.currentZone.numComments} comments</span>
        </div>
        
      </div>
    )
  }
}

export default Zone