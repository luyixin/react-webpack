/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'
import { hearderIcons } from '@/static/data/icon'
import './header.less'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  attachClassName (id, className) {
    let diff = ''
    diff = !id ? ' left' : id === 4 ? ' right' : id === this.props.activeHeaderId ? ' active' : ''
    return (`iconfont ${className}${diff}`)
  }

  render () {
    const iconItem = hearderIcons.map((a, i) => (
      <i className={this.attachClassName(a.id, a.icon)} key={i} aria-hidden="true" onClick={this.props.iconClick.bind(null, a.id)}></i>
    ))
    return (
      <div className="component-header">
        { iconItem }
      </div>
    )
  }
}

export default Header
