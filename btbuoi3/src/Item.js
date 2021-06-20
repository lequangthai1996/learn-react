import React from 'react';
import './Item.css'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      item: this.props.value
    }
  }
  render() {
    const item = this.state.item;
    const id = this.state.id;
    console.log('id = ' + id);
    return (
      <li className="item">
        <div className="square" style={ { backgroundColor: item.color} }></div>
        <div className="content">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
        <button className="btn-delete" onClick={this.props.onClick} >X</button>
      </li>
    )
  }
}

export default Item;