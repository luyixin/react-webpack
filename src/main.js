/*
created by luyixin on 2017.05.13
*/

import './test.css'
import './test.less'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h1>Hello, world!333</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)
