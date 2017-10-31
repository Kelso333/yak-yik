import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return(
      <div style={{marginBottom:16}}>
        {this.props.currentComment.body}<br />
        {this.props.currentComment.username}
        <span>|</span>
        {this.props.currentComment.timestamp}
      </div>
    )
  }
}

export default Comment 