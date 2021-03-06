import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: ''
    },
      list: []
    }
  }

  componentDidMount() {
    superagent
    .get('/api/comment')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if(err) {
        alert('ERROR: ' + err)
        return
      }
      let results = response.body.results
      this.setState({
        list: results
      })
    })
  } // end of componentDidMount

  submitComment(event) {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)
    this.setState({
      list: updatedList
    })
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
  
  updateTimestamp(event) {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = event.target.value
    this.setState({
      comment: updatedComment
    })
  } // end updatedTimestamp

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
          <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Time" /><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments 