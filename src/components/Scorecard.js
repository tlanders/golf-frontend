import React from "react";
import ScorecardHeader from "./ScorecardHeader";
import ScorecardRow from "./ScorecardRow";
import ParRow from "./ParRow";
import HandicapRow from "./HandicapRow";

class Scorecard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const scorecardRows = this.props.course.tees.map((tee, index) => (
            <ScorecardRow {...this.props} teeIndex={index}/>
        ));

        return (
            <div>
                <h2>Scorecard</h2>
                <table className={'scorecard'}>
                    <ScorecardHeader {...this.props}/>
                    <tbody>
                    {scorecardRows}
                    <ParRow {...this.props}/>
                    <HandicapRow {...this.props}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scorecard;