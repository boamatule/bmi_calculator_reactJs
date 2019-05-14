import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'
import { Container, Header, Grid } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  chooseMethod(e) {
    this.setState({method: e.target.value })
  }



  render() {
      return (
        <>
          <Container>
            <Grid centered columns={3}>
              <Grid.Column>
                <Header 
                  as="h1" textAlign="center">
                  BMI Calculator
                </Header>
              </Grid.Column>
            </Grid>

        
                <div>
                  <label>
                    Weight {this.state.chooseMethod === "metric" ? "(lb)" : "(kg)"}
                  </label>
                  <input name="weight"
                  value={this.state.weight}
                  onChange={ (e) => this.setState({weight: e.target.value})}/>
                </div>

              
                <div>
                  <label> 
                    Height {this.state.method === "metric" ? "(cm)" : "(in)"}
                  </label>
                    <input 
                      name="weight" value={this.state.height}
                      onChange={ (e) => this.setState({ height: e.target.value })}/>

                  <select id="method" onChange={(e) => this.chooseMethod(e)}>
                  <option value="metric" >Metric</option>
                  <option value="imperial" >Imperial</option>
                </select>
              </div>

              <DisplayResult
                weight={this.state.weight}
                height={this.state.height}
                method={this.state.method}
              />

          </Container> 
        </>
      );
    }
  }



      

export default App;
