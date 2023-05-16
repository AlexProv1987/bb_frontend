import axios from 'axios';
const axiosBaseURL = axios.create({
    baseURL:"https://apitest.aprovtestdmns.com/.com/"
});
export default axiosBaseURL