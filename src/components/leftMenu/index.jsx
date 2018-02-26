/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'
import './left_menu.less'

class LeftMenu extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={`component-left-menu${this.props.showLeftMenu ? '' : ' hidden'}`}>
        123
      </div>
    )
  }
}

export default LeftMenu
