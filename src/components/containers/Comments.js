import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
    },
      list: [
        {body: 'comment 1', username: 'kelso', timestamp:'10:30'},
        {body: 'comment 2', username: 'yossi', timestamp:'10:45'},
        {body: 'comment 3', username: 'sarah', timestamp:'11:00'}
      ]
    }
  }

  submitComment() {
    console.log('submitComment: ' + JSON.stringify(this.state.comment));
  } // end of submitComment

  updateUsername(event) {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value
    this.setState({
      comment: updatedComment
    })
  } // end of updatedUsername

  updateBody(event) {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value
    this.setState({
      comment: updatedComment
    })

  } // end of updateComment
  
   render() {
    const commentList = this.state.list.map((comment, i) => {
      return (
       <li key={i}><Comment currentComment={comment}/> </li>
      )
    });
    return(

      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentsList}>
            { commentList }
          </ul>

          <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
          <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments 