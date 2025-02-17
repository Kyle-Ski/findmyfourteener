import React, { Component } from 'react';
import './App.css';
class Mypreferences extends Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        hikeDistance: '17',
        distanceFromDenver:'300',
        altitude:'14439',
        totalGain:'6000',
      };
    }
    
    handleChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      const preferenceData = {
        [name]: value
      };

      this.setState({
        [name]:value
      })

      this.props.handlerFromParent(preferenceData);
    }

    render() {
      return (
        <div className="preferences">
          <label>Hike Distance</label>
          <input
            name="hikeDistance"
            type="range"
            id="hikeDistance"
            min="0"
            max="17"
            onChange={this.handleChange}
            value={this.state.hikeDistance}
          />
          <label>{this.state.hikeDistance}</label>
          <br />
          <label>Distance From Denver</label>
          <input
            name="distanceFromDenver"
            type="range"
            id="distanceFromDenver"
            min="0"
            max="300"
            onChange={this.handleChange}
            value={this.state.distanceFromDenver}
          />
          <label>{this.state.distanceFromDenver}</label>
          <br />
          <label>Altitude</label>
          <input
            name="altitude"
            type="range"
            id="altitude"
            min="14000"
            max="14439"
            onChange={this.handleChange}
            value={this.state.altitude}
          />
          <label>{this.state.altitude}</label>
          <br />
          <label>Total Gain</label>
          <input
            name="totalGain"
            type="range"
            id="totalGain"
            min="400"
            max="6000"
            onChange={this.handleChange}
            value={this.state.totalGain}
          />
          <label>{this.state.totalGain}</label>
        </div>
      );
    }
  }
  
  export default Mypreferences;