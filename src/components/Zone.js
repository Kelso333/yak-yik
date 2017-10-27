import React, { Component } from 'react'

class Zone extends Component {
  render() {
    return (

      <div>
        
        <div style={styles.container}>
          <h2 style={styles.header}>
            <a style={styles.zoneTitle} href="#">{this.props.currentZone.name}</a></h2>
          <span>{this.props.currentZone.zipCode}</span><br />
          <span>{this.props.currentZone.numComments} comments</span>
        </div>
        
      </div>
    )
  }
}

const styles = {
  container: {
    padding:16, 
    background:'#f9f9f9', 
    marginTop:12, 
    border: '2px solid #ddd'
  },
  header: {
    marginBottom:5
  },
  zoneTitle: {
    textDecoration:'none', 
    color:'red'
  }
}

export default Zone