import { Unity } from "../types/Unity";
const BASE_URL = 'http://localhost:8080';

export const UnityService = {

    getUnities: async (): Promise<Unity[]>=> {
        const response = await fetch(`${BASE_URL}/unities`, {
            method: "GET",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();

        return data;

    },

    getUnity: async (id: number) : Promise <Unity> => {
        const response = await fetch(`${BASE_URL}/unities/${id}`, {
            method: "GET",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;

    },

    createUnity: async (unity:Unity):  Promise <Unity> => {
        const response = await fetch(`${BASE_URL}/unities`,{
            method: "POST",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(unity)
    });

    const data = await response.json();
    return data;

    },

    updateUnity:async (id: number,unity: Unity): Promise<Unity> => {
        const response = await fetch (`${BASE_URL}/unities/${id}`, {
            method: "PUT",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(unity)
        });

        const data = await response.json();
        return data;
    },
 
    deleteUnity:async (id:number): Promise<void> => {
        await fetch (`${BASE_URL}/unities/{id}`, {
            method: "DELETE",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
            }
        });
    }    

} 
