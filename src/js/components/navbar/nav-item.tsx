import * as React from 'react'

// React Router
import { Link } from 'react-router-dom'

type NavItemProps = {
  link: string
  text: string
  icon?: string
}
type NavItemState = {
  isActive: boolean
}

class NavItem extends React.Component<NavItemProps, NavItemState> {
  state: NavItemState = {
    isActive: false,
  }
  constructor(props: NavItemProps) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  render() {
    let icon: JSX.Element | null
    if (this.props.icon) {
      icon = <i className='material-icons left'>{this.props.icon}</i>
    }
    return (
      <li className={this.state.isActive ? 'active' : ''}>
        <Link to={this.props.link} className='waves-effect'>
          {icon}
          {this.props.text}
        </Link>
      </li>
    )
  }
}

export { NavItem }
