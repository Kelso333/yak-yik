import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {body: 'comment 1', username: 'kelso'},
        {body: 'comment 2', username: 'yossi'},
        {body: 'comment 3', username: 'sarah'}
      ]
    }
  }
  render() {
    const commentList = this.state.map(() => {
      return (
       <li><Comment /> </li>
      )
    })
    return(

      <div>
        <h2>Comments: Zone 1</h2>
          <ul>
            <li><Comment /> </li>
            <li><Comment /> </li>
            <li><Comment /> </li>
            <li><Comment /> </li>
          </ul>
      </div>
    )
  }
}

export default Comments 