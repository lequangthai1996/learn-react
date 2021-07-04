import React from "react";
import './Circle.css'
class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
      size: this.props.size,
      start: true
    }
    this.countDown = this.countDown.bind(this);
    this.changeAction = this.changeAction.bind(this);
  }

  componentDidMount() {
    this.countDown();
  }

  componentDidUpdate() {
    if(this.state.num == 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  countDown() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        num: prevState.num - 1
      }))
    }, 1000);
  }
  stopCountDown() {
    clearInterval(this.interval);
  }
  startCountDown() {
    this.countDown();
  }

  changeAction() {
    if(this.state.start) {      
      this.stopCountDown();
      this.setState({
        start: false
      })
    } else {
      this.startCountDown();
      this.setState({
        start: true
      })
    }
  }

  render() {
    const circleStyles = {
      backgroundColor: 'green',
      width: this.state.size,
      height: this.state.size,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      marginLeft: '30px'
    };
    return (
      <div className="cirlce-block">
        <button onClick={this.changeAction}>{this.state.start == true && this.state.num > 0 ? 'Stop' : 'Start'}</button>
        <div className="circle" style={circleStyles}>{this.state.num}</div>
      </div>
    )
  }
}

export default Circle;