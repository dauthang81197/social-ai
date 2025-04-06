import { axiosNoAuth } from "./axiosConfig";

export const authApi = {
    login: async (email: string, password: string) => {
        // const response = await axiosNoAuth.request('/auth/login', );
        const response = await axiosNoAuth.request({
            method: 'POST',
            baseURL: 'http://10.0.2.2:8000/api/v1/admin',
            url: '/auth/login',
            data: { email, password }
        })
    
        return response;
    },
};