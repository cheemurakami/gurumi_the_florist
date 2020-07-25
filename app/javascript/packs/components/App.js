import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Signup from './Signup'
import Signin from './Signin'
import FlowerList from './FlowerList'
import FlowerCreateForm from './FlowerCreateForm'
import FlowerEditForm from './FlowerEditForm'
import FlowerDetail from './FlowerDetail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {

  //func to check if signed in or not
  const checkLogin = () => {
    fetch("/signed_in")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
      });
  }

  useEffect(() => {
    console.log("Use effect")
    checkLogin();
    return () => {};
  }, []);


  return (
    <Router>
        <NavBar />
      <Switch>
        <Route path="/users/sign_up">
          <Signup />
        </Route>
        <Route path="/users/log_in">
          <Signin />
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
