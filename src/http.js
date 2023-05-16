import axios from 'axios';
const axiosBaseURL = axios.create({
    baseURL:"https://base-ball-oracle-dev.us-east-1.elasticbeanstalk.com/"
});
export default axiosBaseURL