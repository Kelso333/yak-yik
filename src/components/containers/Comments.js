import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

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
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentsList}>
            { commentList }
          </ul>

          <input className="form-control" type="text" placeholder="Username" /><br />
          <input className="form-control" type="text" placeholder="Comment" /><br />
          <button className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments 