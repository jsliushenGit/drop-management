import { Route, Redirect } from 'react-router-dom'
import React, { Fragment } from 'react'
import Home from '../Home'
import TypeManagement from '../TypeManagement'
import BillManagement from '../BillManagement'
import UserManagement from '../UserManagement'

export default class RouteView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/typeManagement',
          component: TypeManagement
        },
        {
          path: '/billManagement',
          component: BillManagement
        },
        {
          path: '/userManagement',
          component: UserManagement
        }
      ]
    }
  }

  renderView = data => {
    return data.map((item, index) => {
      return (
        <Fragment key={index}>
          <Route path={item.path} component={item.component}></Route>
          <Redirect to="/billManagement" />
        </Fragment>
      )
    })
  }

  render() {
    return (
      <div>
        { this.renderView(this.state.routes) }
      </div>
    )
  }
}