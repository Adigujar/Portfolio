import './App.css';
import Nav from './components/nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Headers from'./components/header'
import About from'./components/about'
import Skills from'./components/skills'
import Projects from'./components/projects'

function App() {
  return (
    <div>
      <Nav/>
      <Router>
        <Switch>
            <Route exact path='/' render = {(props) => {
                return (
                    <Headers />
                );
            }} />
            <Route exact path='/about' render = {(props) => {
                return (
                    <About />
                )
            }} />
            <Route exact path='/skills' render = {(props) => {
                return (
                    <Skills />
                )
            }} />
            <Route exact path='/projects' render = {(props) => {
                return (
                    <Projects />
                )
            }} />
            
        </Switch>
    </Router>
  
     
    </div>
  );
}

export default App;
