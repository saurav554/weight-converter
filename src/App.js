import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "./AppBar"
const initialState = {
    pounds: "",
    grams: "",
    kilograms: "",
    ounces: ""
};

class App extends React.Component {
    state = initialState;

    handlePounds = e => {
        const pounds = e.target.value;

        this.setState({
            pounds,
            grams: pounds / 0.0022046,
            kilograms: pounds / 2.2046,
            ounces: pounds * 16
        });

        if (pounds === "") {
            this.setState(initialState);
        }
    };

    handleGrams = e => {
        const grams = e.target.value;

        this.setState({
            grams,
            pounds: grams * 0.0022046,
            kilograms: grams / 1000,
            ounces: grams * 0.03527
        });

        if (grams === "") {
            this.setState(initialState);
        }
    };

    handleKilograms = e => {
        const kilograms = e.target.value;

        this.setState({
            kilograms,
            pounds: kilograms * 2.2046,
            grams: kilograms * 1000,
            ounces: kilograms * 35.27
        });

        if (kilograms === "") {
            this.setState(initialState);
        }
    };
    handleOunces = e => {
        const ounces = e.target.value;

        this.setState({
            ounces,
            pounds: ounces / 16,
            kilograms: ounces / 35.27,
            grams: ounces / 0.03527
        });

        if (ounces === "") {
            this.setState(initialState);
        }
    };
    clearAll = () => {
        this.setState(initialState);
    };

    render() {
        return (
            <div className="App">
            <AppBar/>
                <form
                    onSubmit={e => e.preventDefault()}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-number"
                        label="Enter pounds"
                        value={this.state.pounds}
                        onChange={this.handlePounds}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <TextField
                        id="standard-number"
                        label="Enter grams"
                        value={this.state.grams}
                        onChange={this.handleGrams}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <TextField
                        id="standard-number"
                        label="Enter kilograms"
                        value={this.state.kilograms}
                        onChange={this.handleKilograms}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <TextField
                        id="standard-number"
                        label="Enter ounces"
                        value={this.state.ounces}
                        onChange={this.handleOunces}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.clearAll}
                        className="button"
                    >
                        Remove All
                    </Button>
                </form>
            </div>
        );
    }
}

export default App;
