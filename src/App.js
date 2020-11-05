import React from "react";
import Profile from "./Pages/Profile";
import Payment from "./Pages/Payment";
import Navbar from "./Navbar";
import TestPage from './Pages/TestPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-w-screen-sm m-auto bg-gray-300">
        <Navbar />
        <div className="  bg-gray-200 p-0 sm:p-4 m-0 sm:m-4">
          <Switch>
            <Route path="/" component={Profile} exact />
            <Route path="/payment" component={Payment} />
            <Route path="/test" component={TestPage} exact />
            <Profile />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
