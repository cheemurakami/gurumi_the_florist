import React from 'react'
import NavBar from './NavBar'
import Users from './Users'
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
        <Route path="/users/sign_in">
          <Users />
        </Route>
        <Route path="/newflowers">
          <FlowerCreateForm />
        </Route>
        <Route path="/flower/:id">
          <FlowerDetail />
        </Route>
        <Route path="/editflowers/:id">
          <FlowerEditForm />
        </Route>
        <Route path="/">
          <FlowerList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
