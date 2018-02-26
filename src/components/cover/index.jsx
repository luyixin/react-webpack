/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'
import './cover.less'

class Cover extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={`component-cover${this.props.show ? ' show' : ''}`} onClick={this.props.handleClick}></div>
    )
  }
}

export default Cover
