import React from "react";

class HandicapRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // TODO - don't assume that par is same across tees
        const teeData = this.props.course.tees[0];

        let backNineCellsWithTotals = null;
        if(this.props.numberOfHoles > 9) {
            const backNineCells = [9, 10, 11, 12, 13, 14, 15, 16, 17].map(index => (
                <td>{teeData.holes[index].handicap}</td>
            ));
            backNineCellsWithTotals = (
                <>
                    <td></td>
                    {backNineCells}
                    <td></td>
                </>
            );
        }
        const frontNineCells = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => (
            <td>{teeData.holes[index].handicap}</td>
        ));
        return (
            <tr>
                <th scope={'row'} colSpan={2}>Handicap</th>
                {frontNineCells}
                {backNineCellsWithTotals}
                <td>{teeData.par}</td>
            </tr>
        );
    }
}

export default HandicapRow;