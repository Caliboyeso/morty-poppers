import React, {Component} from "react";
import "./css/index.css";

class NavMessage extends Component {

    state = {
        message: "",
        animating: false
    };

    componentDidUpdate({  score, topScore  }, prevState) {
        const newState = { animating: true };

        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score === 0 && topScore > 0) {
            newState.message = "Incorrect!"
        } else {
            newState.message = "Correct!"
        }

        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
        }
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "Correct!":
                return "You guessed right!"
            case "Incorrect!":
                return "You guessed wrong!"
            default:
                return "Click an image to start..."
        }
    }

    render() {
        return (
            <li
                className={this.state.animating ? this.state.message : ""}
                onAnimationEnd={() => this.setState({animating: false})}
            >
                {this.renderMessage()}
            </li>
        );
    }
}

export default NavMessage;