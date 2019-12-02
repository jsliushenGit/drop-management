import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import MenuList from './menu'

const { SubMenu } = Menu;

export default class MenuLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      MenuList
    }
  }

  renderMenu = data => {
    return data.map((item, index) => {
      if(item.children){
        return(
          <SubMenu title={item.title} key={index}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.href}>
        <Link to={item.href}>{item.title}</Link>
      </Menu.Item>
    })
  }

  render() {
    return (
      <Menu
        style={{ width: 256 }}
        mode="inline"
      >
        {this.renderMenu(this.state.MenuList)}
      </Menu>
    );
  }
}