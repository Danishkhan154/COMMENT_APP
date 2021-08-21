import React, { Component } from 'react';
import './App.css';

const data = [
  {
    "id": 1,
    "text": "This is a comment."
  },
  {
      "id": 2,
      "text": "This is a second comment."
  }
]

function Comment({id, text}){
  return(
    <div className="comment">
      <p><button id={id} onClick={(event)=>{

      }}>X</button>{text}</p>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments:[]
      // newComment:""
    }
  }
  removeComment(id){
    const newArr = data.filter((comment)=> comment.id !== id)
    this.setState({
      comments: newArr
    })
  }
  componentDidMount(){
    this.setState({
      comments:data
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Comment Feed</h1>
        <button onClick={this.resetCommentFeed}>Reset comment feed</button>
        {data.map((comment)=>{
          return <Comment key={comment.id} text={comment.text} id={comment.id}></Comment>
        })}
        <div>
        <input placeholder="Add a comment"/>
        <button >Reply</button>
        </div>
      </div>
    );
  }

  private resetCommentFeed = () => {
    fetch('/api/reset-comments', {
      method: 'post'
    });
  }
}

export default App;
