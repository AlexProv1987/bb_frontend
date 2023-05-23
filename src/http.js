import axios from 'axios';
const axiosBaseURL = axios.create({
    baseURL:process.env.REACT_APP_API
});
export default axiosBaseURL