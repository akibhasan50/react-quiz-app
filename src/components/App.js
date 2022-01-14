import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import dotenv from 'dotenv'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {AuthProvider} from '../contexts/SignupContext'
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

dotenv.config()
function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Switch>
              <Route  exact path="/">
                  <Home /> 
              </Route>
              <PublicRoute exact  path="/signup">
                <Signup /> 
              </PublicRoute>
              <PublicRoute  exact path="/login"> 
                <Login /> 
              </PublicRoute>
            
              <PrivateRoute  exact path="/quiz/:id"> 
                   <Quiz></Quiz>
              </PrivateRoute>
              <PrivateRoute  exact path="/result/:id"> 
                  <Result> </Result>
              </PrivateRoute>
              
          
        </Switch>
      </Layout>
      </AuthProvider>
     
    </Router>
   
  );
}

export default App;
