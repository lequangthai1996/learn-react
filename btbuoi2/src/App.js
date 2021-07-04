import logo from './logo.svg';
import './App.css';
import Circle from './Circle';
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      page: page
    })
  }
  render() {
    return (
      <div className="App">
        <nav>
          <button onClick={ (e) => this.changePage('home') }>Home</button>
          <button onClick={ (e) => this.changePage('about') } >About</button>
        </nav>
        { (this.state.page === 'home') &&
        <div className="content">
          <Circle num='10' size='50px'/>
          <Circle num='20' size='100px'/>
          <Circle num='30' size='200px'/>
        </div>      
        }
      </div>
      );
    }
}
export default App;
