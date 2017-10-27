import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
  
  render() {
    const zoneStyle = styles.zone
    return (

      <div>
        
        <div style={zoneStyle.container}>
          <h2 style={zoneStyle.header}>
          <a style={zoneStyle.zoneTitle} href="#">{this.props.currentZone.name}</a></h2>
          <span className="detail">{this.props.currentZone.zipCode}</span><br />
          <span className="detail">{this.props.currentZone.numComments} comments</span>
        </div>
        
      </div>
    )
  }
}

export default Zone