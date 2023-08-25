import axios from 'axios';

const repuest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const response = await repuest.get(path, option);
    return response.data;
};

export default repuest;
