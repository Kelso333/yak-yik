import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {body: 'comment 1', username: 'kelso', timestamp:'10:30'},
        {body: 'comment 2', username: 'yossi', timestamp:'10:45'},
        {body: 'comment 3', username: 'sarah', timestamp:'11:00'}
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
        <div style={{padding:12, background:'#f9f9f9', border:'1px solid #ddd'}}>
          <ul>
            { commentList }
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments 