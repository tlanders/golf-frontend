import React from "react";
import Scorecard from "../components/Scorecard";

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
                    <p>Name: {course.name}</p>
                    <p>Location: {course.location}</p>
                    <p>Website: <a href={course.url} target={'blank'}>{course.url}</a></p>
                    <Scorecard course={course} numberOfHoles={course.numberOfHoles} {...this.props}/>
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