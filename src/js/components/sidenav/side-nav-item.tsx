import * as React from 'react'

// React Router
import { Link } from 'react-router-dom'

type SideNavItemProps = {
  link: string
  text: string
  icon?: string
}

class SideNavItem extends React.Component<SideNavItemProps> {
  render() {
    const icon = this.props.icon ? <i className='material-icons left'>{this.props.icon}</i> : null

    return (
      <li>
        <Link to={this.props.link} className='waves-effect sidenav-close'>
          {icon}
          {this.props.text}
        </Link>
      </li>
    )
  }
}

export { SideNavItem }
