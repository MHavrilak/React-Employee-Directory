import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Wrapper>
                    <Route exact path="/search" component={Search} />

                </Wrapper>
            </div>
        </Router>
    );
}

export default App;