import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
// intro
import Vision from './components/Introduction/Vision'
import Goal from './components/Introduction/Goal'
import Plan from './components/Introduction/Plan'
import Research from './components/Introduction/Research'
import List from './components/Introduction/List'
// config
import Professor from './components/Configuration/Professor'
import Researcher from './components/Configuration/Researcher'
import Student from './components/Configuration/Student'
// research
import Business from './components/Research/Business'
import Performance from './components/Research/Performance'
// instruction
import instructions from './components/Instructions/Instructions'
// user
import Login from './components/User/Login'
import Signup from './components/User/Signup'
import Admin from './components/User/Admin'
// sitemap
import Sitemap from './components/Sitemap/Sitemap'
// header,footer
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// 404 error
import NotFoundPage from './pages/404'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/introduction/vision" component={Vision} />
        <Route exact path="/introduction/goal" component={Goal} />
        <Route exact path="/introduction/plan" component={Plan} />
        <Route exact path="/introduction/research" component={Research} />
        <Route exact path="/introduction/List" component={List} />

        <Route path="/configuration/professor" component={Professor} />
        <Route path="/configuration/researcher" component={Researcher} />
        <Route path="/configuration/student" component={Student} />

        <Route path="/research/business" component={Business} />
        <Route path="/research/performance" component={Performance} />

        <Route path="/instructions" component={instructions} />

        <Route path="/sitemap" component={Sitemap} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin" component={Admin} />

        <Route component={NotFoundPage} />
      </Switch>

      <Footer />

      {/* <Route exact component={NotFoundPage} /> */}
    </Router>
  );
}

export default App;
