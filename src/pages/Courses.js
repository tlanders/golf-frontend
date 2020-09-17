import React from "react";
import getCourses from "../api/courses";
import Axios from "axios";

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
        if(this.state.isLoading) {
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
                    <p>Loaded</p>
                    {
                        this.state.courses.map((course) => {
                            return (
                                <p>{course.name}</p>
                            );
                        })
                    }
                </div>
            );
        }
    }

    componentDidMount() {
        // Axios.get('http://localhost:3001/courses')
        getCourses()
            .then(result => {
                console.log('result=' + result.data);
                this.setState({
                    courses: result.data,
                    isLoading: false
                });
                console.log(result.data);
            })
            .catch(err => console.log('axios courses get err: ', err));
    }
}

export default Courses;