import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Item from './Item';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: props.posts};
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem(id) {
    console.log('delete item id = ' + id);
    this.setState(function(state, props) {
      let indexItem = this.state.posts.map((item) => item.id).indexOf(id);
      let newPosts = this.state.posts.filter( (post, index) => index !== indexItem);
      console.log('new post');
      console.log('index = ' + indexItem);
      console.log(newPosts);
      console.log('end new post')
      return {
        posts: newPosts
      }
    });
  }
  render() {
    let posts = this.state.posts;
    console.log(posts);
    const listItems = posts.map((post) =>
      <Item key={post.id} id={post.id} value={post} onClick={ (e) => this.handleDeleteItem(post.id)} />
    )
    return (
      <div className="posts">
        {this.state.posts.length == 0 &&
        <span>Bạn không còn item nào</span>
        }   
        <ul>{listItems}</ul>
      </div>
    );
  }
}

const posts = [
  {id: 1, color: 'Yellow', title: 'Title 1', content: 'Content 1, xxxxxxxxxxx'},
  {id: 2, color: 'Red', title: 'Title 2', content: 'Content 2, yyyyyyyyyyy'},
  {id: 3, color: 'Blue',  title: 'Title 3', content: 'Content 3, yyyyyyyyyyy'},
]

ReactDOM.render(
  <Blogs posts={posts}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
