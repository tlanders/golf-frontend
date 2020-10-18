// courses api
import Axios from "axios";

const getCourses = () => (Axios.get('http://localhost:3001/courses'));

export const getCourse = (key) => {
    console.log('getCourse: ', key);
    Axios.get('http://localhost:3001/courses')
        .then(res => {
            console.log('have courses, now filtering', res.data);
            return res.data.filter(course => course.courseKey === key)[0];
        })
        .catch(err => {
            console.log('Error getting course, key=' + key, err);
            return null;
        });
}

export default getCourses;