/*
* created by lu.yixin on 2018/02/22
*/

import React, { Component } from 'react'
import Header from '@/components/header'
import LeftMenu from '@/components/leftMenu'
import Cover from '@/components/cover'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      activeHeaderId: 2,
      showLeftMenu: false
    }
  }

  iconClick (id) {
    if (id === this.state.activeHeaderId) return
    if (!id) {
      return this.setState({
        showLeftMenu: true
      })
    }
    if (id === 4) return
    this.setState({
      activeHeaderId: id
    })
  }

  closeLeftMenu () {
    this.setState({
      showLeftMenu: false
    })
  }
  render () {
    return (
      <div>
        <Header activeHeaderId={this.state.activeHeaderId} iconClick={this.iconClick.bind(this)} />
        <LeftMenu showLeftMenu={this.state.showLeftMenu} />
        <Cover show={this.state.showLeftMenu} handleClick={this.closeLeftMenu.bind(this)}/>
        main
      </div>
    )
  }
}

export default Main
