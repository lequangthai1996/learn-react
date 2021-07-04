import React, { Component } from 'react';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class Temperature extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temp = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Input temperature in {scaleNames[scale]}</legend>
        <input type="text" value={temp} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default Temperature;