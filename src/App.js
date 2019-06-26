import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'
import { Container, Header, Grid, Divider, Segment, Input, Label } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
			height: '',
			method: 'metric'
			// method: 'imperial'
    }
	}
	
  chooseMethod(e) {
    this.setState({method: e.target.value })
	}
	
  render() {
    return (
			<>
				<Container textAlign="center">
					<Grid centered columns={1}>
						<Grid.Column>
							<Header 
								as="h1" textAlign="center">
								BMI Calculator
							</Header>
						</Grid.Column>
					</Grid>
					<Divider></Divider>

					<>
						<Segment>
							<Label>
								Weight {this.state.method === "metric" ? "(kg)" : "(lbs)"}
								<Input name="weight"
									value={this.state.weight}
									onChange={ (e) => this.setState({ weight: e.target.value})}/>
							</Label>							
					
							<Label> 
								Height {this.state.method === "metric" ? "(cmgit ad)" : "(inches)"}
								<Input name="height" 
									value={this.state.height}
									onChange={ (e) => this.setState({ height: e.target.value })}/>
							</Label>
						</Segment>
					</>
					
					<>
						<Segment>
							<select id="method" value={this.state.method}  onChange={(e) => this.chooseMethod(e)}>
								<option value="metric" >Metric</option>
								<option value="imperial" >Imperial</option>
							</select>
						</Segment>
					</>

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
