
import React from 'react'
import { Route }  from 'react-router-dom'

import MainNavigation from './MainNavigation'
import Home           from './Home'
import Blog           from './Blog'

class App extends React.Component {
  render () {
    return (
      <MainNavigation>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </MainNavigation>
      )
  }
}

export default App
