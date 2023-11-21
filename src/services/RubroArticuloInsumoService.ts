import { RubroArticuloInsumo } from "../types/RubroArticuloInsumo";

const BASE_URL = 'http://localhost:8080';

export const RubroArticuloInsumoService = {

    getRubroArticuloInsumos: async () : Promise <RubroArticuloInsumo[]>=> {
    
    const response = await fetch(`${BASE_URL}/api/v1/rubroArticuloInsumo`,{
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

    // getRubroArticuloInsumo: async (id: number): Promise<RubroArticuloInsumo> => {

    //     const response = await fetch(`${BASE_URL}/api/v1/rubroArticuloInsumo/${id}`,{
    //         method: "GET",
    //         headers: {
    //             'Accept': '*/*',
    //             'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
    //             'Content-Type': 'application/json'
    //         },
    //     });
    //     const data = await response.json();
    //     return data;
    // },

    creaateRubroArticuloInsumo: async (rubroArticuloInsumo: RubroArticuloInsumo): Promise<RubroArticuloInsumo>=> {
        const response = await fetch( `${BASE_URL}/api/v1/rubroArticuloInsumo`,{
            method: "POST",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubroArticuloInsumo)
        });

        const data = await response.json();
        return data;

    },

    updateRubroArticuloInsumo: async (id:number,rubroArticuloInsumo:RubroArticuloInsumo):Promise<RubroArticuloInsumo>=>{
        const response = await fetch( `${BASE_URL}/api/v1/rubroArticuloInsumo/${id}`,{
            method: "PUT",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubroArticuloInsumo)
        });

        const data = await response.json();
        return data;

    },

    deleteRubroArticuloInsumo: async (id:number):Promise<void>=>{
        await fetch( `${BASE_URL}/api/v1/rubroArticuloInsumo/${id}`,{
            method: "DELETE",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('tokenLogIn'),
            },
    });
    }    

}