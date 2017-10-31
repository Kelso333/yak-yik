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
    const commentList = this.state.list.map((comment, i) => {
      return (
       <li><Comment currentComment={comment}/> </li>
      )
    });
    return(

      <div>
        <h2>Comments: Zone 1</h2>
          <ul>
            { commentList }
          </ul>
      </div>
    )
  }
}

export default Comments 