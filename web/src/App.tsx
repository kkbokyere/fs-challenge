import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import './styles/App.scss'
import LoginPage from "./pages/LoginPage";
import DevicesPage from "./pages/DevicesPage";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
    const authenticatedUser = JSON.parse(localStorage.getItem('user') as string);
    const [isAuthenticated, setIsAuthenticated] = useState(authenticatedUser);
    const handleLoginUser = (user: object) => {
        localStorage.setItem('user', JSON.stringify(user));
        setIsAuthenticated(!!user);
    };
    const handleLogoutUser = () => {
        localStorage.clear();
        setIsAuthenticated(false);
    };

    return (
    <div className="App">
        <Router>
            {isAuthenticated && <Header user={authenticatedUser} handleLogout={handleLogoutUser}/>}
            <Layout>
                <Switch>
                    <Route exact path="/">
                        {isAuthenticated ? <Redirect to="/devices" /> : <LoginPage onHandleLogin={handleLoginUser} />}
                    </Route>
                    <PrivateRoute path="/devices" isAuthenticated={isAuthenticated}>
                        <DevicesPage />
                    </PrivateRoute>
                </Switch>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
