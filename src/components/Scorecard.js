import React from "react";
import ScorecardHeader from "./ScorecardHeader";

class Scorecard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Scorecard</h2>
                <p>num holes: {this.props.numberOfHoles}</p>
                <table className={'scorecard'}>
                    <ScorecardHeader {...this.props}/>

                    <tbody>
                    <tr>
                        <th scope={'row'}>Blue</th>
                        <td>72.5 / 130.3</td>
                        <td>100</td>
                        <td>200</td>
                        <td>300</td>
                        <td>400</td>
                        <td>500</td>
                        <td>600</td>
                        <td>700</td>
                        <td>800</td>
                        <td>900</td>
                        <td>3300</td>
                        <td>100</td>
                        <td>110</td>
                        <td>120</td>
                        <td>130</td>
                        <td>140</td>
                        <td>150</td>
                        <td>160</td>
                        <td>170</td>
                        <td>180</td>
                        <td>3200</td>
                        <td>7500</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scorecard;