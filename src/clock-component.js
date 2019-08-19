import React, { Component } from 'react'

export default class Clock extends Component {

    state = { 
        time: new Date()
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        this.setState({
            time: new Date(),
        });
    }

    doubleDigits(val){
        if (val < 10){
            return "0" + val;
        }
        return val;
    }

    render() {
        return (
          <div> 
              <p id="hours">{this.doubleDigits(this.state.time.getHours())}:</p> 
              <p id="minutes">{this.doubleDigits(this.state.time.getMinutes())}:</p>
              <p id="seconds">{this.doubleDigits(this.state.time.getSeconds())}</p> 
          </div>)
      }
}