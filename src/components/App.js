import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
              <Route  exact path="/">
                  <Home /> 
              </Route>
              <Route exact  path="/signup">
                <Signup /> 
              </Route>
              <Route  exact path="/login"> 
                <Login /> 
              </Route>
            
              <Route  exact path="/quiz"> 
                   <Quiz></Quiz>
              </Route>
              <Route  exact path="/result"> 
                  <Result> </Result>
              </Route>
              
           
        
           
          
        </Switch>
      </Layout>
    </Router>
   
  );
}

export default App;
