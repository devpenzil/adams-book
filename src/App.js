import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardPage/Dashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
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
      <ToastContainer />
    </div>
  );
}

export default App;
