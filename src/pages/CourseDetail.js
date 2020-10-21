import React from "react";

class CourseDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseKey: props.match.params.courseKey,
        };
    }

    render() {
        const course = this.props.courses ? this.props.courses.filter(c => c.key === this.state.courseKey)[0] : null;

        if(course) {
            return (
                <div>
                    <h1>Course Detail</h1>
                    <img src={course.image} className={'course-image'} alt={course.name + ' hero'}/>
                    {/*<p>Key: {this.state.courseKey}</p>*/}
                    <p>Name: {course.name}</p>
                    <p>Location: {course.location}</p>
                    <p>Website: <a href={course.url} target={'blank'}>{course.url}</a></p>
                    <h2>Scorecard</h2>
                    <table className={'scorecard'}>
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
                                <th className={'scorecard-total'}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Blue</td>
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
            )
        } else {
            return (
                <div>
                    <h1>Course Detail</h1>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

export default CourseDetail;