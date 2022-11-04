import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home1 from './Home1';
import Profile from './Profile';
import Upcom from './Upcom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Header/>
        <Switch>
          <Route exact path="/">
            <Home1/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/upcoming">
            <Upcom/>
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
