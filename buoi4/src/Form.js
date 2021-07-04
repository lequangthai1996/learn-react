import React from 'react';
 
class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name is submit, value = ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          {/* <textarea value={this.state.value} onChange={this.handleChange}/> */}
          <select multiple={true} value={['grapefruit', 'Coconut']} onChange={this.handleChange} >
            <option value="grapefruit">grapefruit</option>
            <option value="lime">Lime</option>
            <option value="Coconut">Coconnut</option>
            <option value="Mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
} 

export default Form;