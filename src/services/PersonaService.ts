import Persona from "../types/Persona";

const API_URL = "http://localhost:8080/api/v1";

export const PersonaService = {
    getPersonas: async () : Promise<  Persona[]> => {
        const response = await fetch(`${API_URL}/personas`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("tokenLogIn")
            }
        });
        const data = await response.json();
        return data;
    },

    getPersona: async(id: number) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/personas/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("tokenLogIn")
            }
        });
        const data = await response.json();
        return data;
    },

    createPersona: async(persona: Persona) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/personas`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("tokenLogIn")
            },
            body: JSON.stringify(persona)
        });
        const data = await response.json();
        return data;
    },

    updatePersona: async(id: number, persona: Persona) : Promise<Persona> => {
        delete persona.authorities;
        const response = await fetch(`${API_URL}/personas/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("tokenLogIn")
            },
            body: JSON.stringify(persona)
        });
        const data = await response.json();
        return data;
    },

    deletePersona: async(id: number) : Promise<void> => {
        await fetch(`${API_URL}/personas/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("tokenLogIn")
            }
        });
    },

    getPersonaPorEmail: async(email: string) : Promise<Persona> => {
        const response = await fetch(`${API_URL}/personas/encontrarPorEmail?email=${email}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("tokenLogIn")
            }
        });
        const data = await response.json();
        return data;
    }


};
