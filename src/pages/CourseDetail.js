import React from "react";

class CourseDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Course Detail</h1>
                <p>Key: {this.props.match.params.courseKey}</p>
            </div>
        )
    }
}

export default CourseDetail;