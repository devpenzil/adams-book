import {BrowserRouter as Router , Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import SignupPage from "./pages/SignupPage"
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/dashboard">
         <Dashboard />
        </Route>
        <Route path="/profile">
         <ProfilePage />
        </Route>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
