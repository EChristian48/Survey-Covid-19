import * as React from 'react'

import { SideNavItem } from './side-nav-item';

type SideNavProps = {
  id: string
}
class SideNav extends React.Component<SideNavProps> {
  render() {
    return (
      <ul id={this.props.id} className='sidenav'>
        {this.props.children}
      </ul>
    )
  }
}

export { SideNav }
