import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';

class DisplayResult extends Component {
  calculate() {
    var weight= this.props.weight;
    var height= this.props.height;
    var pounds= this.props.pounds
    var inches= this.props.inches

    return bmiCalculation(weight, height, pounds, inches); 
  }
  
  render() {
    return (
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult
