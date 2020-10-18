import React from "react";
import {getCourse} from "../api/courses";

class CourseDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseKey: props.match.params.courseKey,
            course: null,
            isFound: false
        }
    }

    componentDidMount() {
        console.log('getting course: ', this.state.courseKey);
        getCourse(this.state.courseKey)
            .then(course => {
                console.log('found course: ', course);
                this.setState({
                    course,
                    isFound: course != null
                });
            });
    }

    render() {
        if(this.state.course) {
            return (
                <div>
                    <h1>Course Detail</h1>
                    <p>Key: {this.state.courseKey}</p>
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