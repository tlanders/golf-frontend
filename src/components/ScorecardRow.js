import React from "react";

class ScorecardRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const teeData = this.props.course.tees[this.props.teeIndex];

        let backNineCellsWithTotals = null;
        if(this.props.numberOfHoles > 9) {
            const backNineCells = [9, 10, 11, 12, 13, 14, 15, 16, 17].map(index => (
                <td>{teeData.holes[index].distance}</td>
            ));
            backNineCellsWithTotals = (
                <>
                    <td>3300</td>
                    {backNineCells}
                    <td>3200</td>
                </>
            );
        }
        const frontNineCells = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => (
            <td>{teeData.holes[index].distance}</td>
        ));
        return (
            <tr>
                <th scope={'row'}>{teeData.name}</th>
                <td>{teeData.rating} / {teeData.slope}</td>
                {frontNineCells}
                {backNineCellsWithTotals}
                <td>{teeData.distance}</td>
            </tr>
        );
    }
}

export default ScorecardRow;