// courses api
import Axios from "axios";

const getCourses = () => (Axios.get('http://localhost:3001/courses'));

export default getCourses;