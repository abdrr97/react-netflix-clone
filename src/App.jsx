import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Search } from './pages'

const App = () => {
  return (
    <>
      <main className='page'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />

            <Route path='*'>
              <h1>404 Page Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  )
}

export default App
