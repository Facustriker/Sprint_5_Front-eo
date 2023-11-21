import { Unity } from "../types/Unity";
<<<<<<< HEAD

=======
>>>>>>> 72a655b305cd9f4d7412a14634b4762618a6fc6a
const BASE_URL = 'http://localhost:8080';

export const UnityService = {

    getUnities: async (): Promise<Unity[]>=> {
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida`, {
=======
        const response = await fetch(`${BASE_URL}/unities`, {
>>>>>>> 72a655b305cd9f4d7412a14634b4762618a6fc6a
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
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida/${id}`, {
=======
        const response = await fetch(`${BASE_URL}/unities/${id}`, {
>>>>>>> 72a655b305cd9f4d7412a14634b4762618a6fc6a
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
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida`,{
=======
        const response = await fetch(`${BASE_URL}/unities`,{
>>>>>>> 72a655b305cd9f4d7412a14634b4762618a6fc6a
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
<<<<<<< HEAD
        const response = await fetch (`${BASE_URL}/api/v1/unidadMedida/${id}`, {
=======
        const response = await fetch (`${BASE_URL}/unities/${id}`, {
>>>>>>> 72a655b305cd9f4d7412a14634b4762618a6fc6a
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
<<<<<<< HEAD
        await fetch (`${BASE_URL}/api/v1/unidadMedida/${id}`, {
=======
        await fetch (`${BASE_URL}/unities/{id}`, {
>>>>>>> 72a655b305cd9f4d7412a14634b4762618a6fc6a
            method: "DELETE",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
            }
        });
    }    

} 
