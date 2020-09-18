import React from "react";
import getScores from "../api/scores";

class Scores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: null,
            isLoading: true
        };
    }

    componentDidMount() {
        getScores()
            .then(result => {
                console.log('result=' + result.data);
                this.setState({
                    scores: result.data,
                    isLoading: false
                });
                console.log(result.data);
            })
            .catch(err => console.log('axios score get err: ', err));
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div>
                    <h1>Scores</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Scores</h1>
                    {
                        this.state.scores.map(score => {
                            return (
                                <p>{score.golfer} {score.date} {score.totalScore}</p>
                            );
                        })
                    }
                </div>
            )
        }
    }
}

export default Scores;