import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import SearchForm from "./components/SearchForm";

function App() {
    return (
        <Router>
            <div>
                <Wrapper>
                    <Route path="/" component={SearchForm} />

                </Wrapper>
            </div>
        </Router>
    );
}

export default App;