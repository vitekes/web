import React, { Component } from 'react'
import Logo from '../logo/Logo'
import Massagers from '../massagers/Massagers'
import MenuList from '../menu_list/MenuList'

export default class Footer extends Component {
  render() {
    return (
      <footer className="pb-[30px]">
        <div className="container md:px-0 px-1 md:w-[1120px] mx-auto">
          <div className="flex justify-between items-center pb-[30px] flex-col md:flex-row gap-[30px]">
            <Logo />
            <Massagers />
            <MenuList
            hidden={false}
            />
          </div>
          <div className="pt-[30px] text-center border-t">
          © 2024 Vifux
          </div>
        </div>
      </footer>
    )
  }
}
