import * as React from 'react'
import { NavItem } from './nav-item'
type NavbarProps = {
  title: string
  sideNav: string
}

class Navbar extends React.Component<NavbarProps> {
  render() {
    return (
      <header>
        <nav className='teal lighten-2'>
          <div className='nav-wrapper'>
            <a className='sidenav-trigger' data-target={this.props.sideNav}>
              <i className='material-icons'>menu</i>
            </a>

            <div className='container'>
              <a href='#/home' className='brand-logo' id='logo-container'>
                {this.props.title}
              </a>

              <ul className='right hide-on-med-and-down'>
                {this.props.children}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export { Navbar }
