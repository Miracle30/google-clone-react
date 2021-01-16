import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    {/* SearchPage */}
                    <Route path="/search">
                        <SearchPage />
                    </Route>

                    {/* Home */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
