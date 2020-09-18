// scores api
import Axios from "axios";

const getScores = () => (Axios.get('http://localhost:3001/scores'));

export default getScores;