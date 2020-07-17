import React from 'react'
import NavBar from './NavBar'
import FlowerList from './FlowerList'
import FlowerCreateForm from './FlowerCreateForm'
import FlowerEditForm from './FlowerEditForm'
import FlowerDetail from './FlowerDetail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
        <NavBar />
      <Switch>
        <Route path="/newflowers">
          <FlowerCreateForm />
        </Route>
        <Route path="/flower">
          <FlowerDetail />
        </Route>
        {/* <Route path="/editflowers">
          <FlowerEditForm />
        </Route> */}
        <Route path="/">
          <FlowerList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
