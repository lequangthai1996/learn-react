import React from 'react'
import Temperature from './Temperature';

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil</p>
  } else {
    return <p>The water would not boil</p>
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}


function tryConvert(temp, convert) {
  const input = parseFloat(temp);
  if(isNaN(input)) {
    return '';
  }
  const output = convert(temp);
  const round = Math.round(output*1000)/1000;
  return round.toString();
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCChange = this.handleCChange.bind(this);
    this.handleFchange = this.handleFchange.bind(this);
  }

  handleCChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  handleFchange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const cValue = scale === 'c' ? this.state.temperature : tryConvert(temperature, toCelsius);
    const fValue = scale === 'f' ? this.state.temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        <Temperature scale="c" temperature={cValue} onTemperatureChange={this.handleCChange}/>
        <Temperature scale="f" temperature={fValue} onTemperatureChange={this.handleFchange}/>
        <BoilingVerdict celsius={cValue}/>
      </div>
    )
  }
}

export default Calculator;