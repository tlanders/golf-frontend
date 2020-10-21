import React from "react";

class ScorecardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let backNineHeader = null;
        if(this.props.numberOfHoles > 9) {
            backNineHeader = (
                <>
                <th className={'scorecard-total'}>Out</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th className={'scorecard-total'}>In</th>
                </>
            );
        }
        return (
            <thead>
            <tr>
                <th className={'scorecard-row-name'}>Tee</th>
                <th className={'scorecard-row-rating'}>Rating / Slope</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                {backNineHeader}
                <th className={'scorecard-total'}>Total</th>
            </tr>
            </thead>
        );
    }
}

export default ScorecardHeader;