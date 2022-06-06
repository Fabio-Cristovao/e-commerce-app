import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 1, name: "Fábio", email: "fabio@fakemail.com"},
        }
        const response = await api.post('./validate', {token});
        return response.data
    },
    signin: async (email: string, password: string) => {
        console.log(email, password);
        return {
            user: { id: 1, name: "Fábio", email: "fabio@fakemail.com"},
           token: "123456789",
        };
        const response = await api.post('/signin', {email, password });
        return response.data;
    },
    logout: async () => {
        return{ status: true };
        const response = await api.post('./logout');
        return response.data;
    }
});