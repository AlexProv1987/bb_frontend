import axios from 'axios';
const axiosBaseURL = axios.create({
    baseURL:"http://base-ball-oracle-dev.us-east-1.elasticbeanstalk.com"
});
export default axiosBaseURL