import React from "react";

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null,
            isLoading: true
        };

        console.log(this.state.courses);
    }

    render() {
        const courses = this.props.courses;
        if(!courses) {
            return (
                <div>
                    <h1>Courses</h1>
                    <p>Loading...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Courses</h1>
                    {
                        courses.map((course) => {
                            return (
                                <p key={course.key}><a href={"/courses/" + course.key}>{course.name}</a> {course.location}</p>
                            );
                        })
                    }
                </div>
            );
        }
    }
}

export default Courses;