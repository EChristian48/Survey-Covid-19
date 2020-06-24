import * as React from 'react'

// React Router
import { HashRouter, Switch, Route } from 'react-router-dom'

// Navbar Components
import { Navbar } from './components/navbar/navbar'
import { NavItem } from './components/navbar/nav-item'

// SideNav Components
import { SideNav } from './components/sidenav/side-nav'
import { SideNavItem } from './components/sidenav/side-nav-item'

// Pages
import { Home } from './pages/home'
import { Survey } from './pages/survey/survey'
import { Saved } from './pages/saved/saved'

type AppProps = {}
type AppState = {
  lastSurvey: number | string
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    lastSurvey: 0,
  }
  constructor(props: AppProps) {
    super(props)
  }

  componentDidMount() {
    const initialState: AppState = {
      lastSurvey: localStorage.getItem('last-survey') || 0,
    }
    this.setState(initialState)

    const elem = document.querySelector('#side')
    const sideNav = M.Sidenav.init(elem)
  }
  render() {
    return (
      <HashRouter>
        <Navbar sideNav='side' title='Check-19'>
          <NavItem text='Hasil Saya' link='/saved' icon='analytics' />
          <NavItem text='Ikuti Survey' link='/survey' icon='assignment' />
        </Navbar>

        <SideNav id='side'>
          <SideNavItem text='Home' link='/home' icon='home' />
          <SideNavItem text='Ikuti Survey' link='/survey' icon='assignment' />
          <SideNavItem text='Hasil Saya' link='/saved' icon='analytics' />
        </SideNav>

        <Switch>
          <Route path='/survey'>
            <Survey />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}

export { App }
