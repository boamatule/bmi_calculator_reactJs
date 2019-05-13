import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'Metric'
    }
  }
  
  chooseMethod() {
    if (this.state.chooseMethod === 'Metric') {
      this.setState({ chooseMethod: 'Imperial' })
    } else {
      this.setState({chooseMethod: 'Metric'})
      }
  }

render() {
    return (
      <div>
        <div>
            <label>
              weight {this.state.chooseMethod === "Metric" ? "(kgs)" : "(pounds)"}
            </label>
            <input name="weight"
            value={this.state.weight}
            onChange={ (e) => this.setState({weight: e.target.value})}/>
        </div> 
        <br/>
        
        <div>
          <label> 
            height {this.state.chooseMethod === "Metric" ? "(cms" : "(inches)"}
          </label>
            <input 
              name= "weight" value={this.state.height}
              onChange={ (e) => this.setState({ height: e.target.value })}/>

          <button onClick={() => this.chooseMethod()}>
            {this.state.method}
          </button>
      </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }
}

export default App;