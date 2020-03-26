import React, { Component } frmo "react";
import API from "./utils/API";
import Card from '../components/card';

class Discover extends Component {
    state = {
        image: "",
        match: false,
    };

componentDidMount() {
    this.loadNextEmployee();
}

handleBtnClick = e => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = {...this.state };

    if (btnType === "pick") {
        newState.match = 1 === Math.floor(Math.random() * 5) + 1;

        newState.matchCount = newState.match
            ? newState.matchCount + 1
            : newState.matchCount;
    }else {
        newState.match = false;
    }
    this.setState(newState);
    this.loadNextEmployee();
};

loadNextEmployee = () => {
    API.getEmployee()
    .then(res =>
        this.setState({
            image: res.data.message
        })
    )
    .catch(err => console.log(err));
};

render() {
    return (
        <div>
            <hi className="text-center">Employee</hi>
            <Card image={this.state.image} handleBtnCLick={this.handleBtnClick} />

            
        </div>
    );
}
}

export default Discover;