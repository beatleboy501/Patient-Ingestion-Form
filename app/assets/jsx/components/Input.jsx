import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  type: React.PropTypes.string,
  valChange: React.PropTypes.func,
  val: React.PropTypes.string,
  label: React.PropTypes.string
};

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="input-component">
          <label>{this.props.label}</label>
          <br/>
          <input type={this.props.type} onChange={this.props.valChange} value={this.props.val} maxLength={this.props.maxLength} max={this.props.max}/>
        </div>
    );
  }
}

Input.PropTypes = propTypes;
