import { RubroArticuloManufacturado } from "../types/RubroArticuloManufacturado";

const BASE_URL = 'http://localhost:8080';

export const RubroArticuloManufacturadoService = {

    getRubroArticuloManufacturados: async () : Promise <RubroArticuloManufacturado[]>=> {
    
    const response = await fetch(`${BASE_URL}/api/v1/rubroArticuloManufacturado`, {
        method: "GET",
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ` + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
    
    },

    getRubroArticuloManufacturado: async (id: number): Promise<RubroArticuloManufacturado> => {

        const response = await fetch(`${BASE_URL}/api/v1/rubroArticuloManufacturado/${id}`, {
            method: "GET",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;
    },

    createRubroArticuloManufacturado: async (rubroArticuloManufacturado: RubroArticuloManufacturado): Promise<RubroArticuloManufacturado>=> {
        const response = await fetch( `${BASE_URL}/api/v1/rubroArticuloManufacturado`,{
            method: "POST",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubroArticuloManufacturado)
        });

        const data = await response.json();
        return data;

    },

    updateRubroArticuloManufacturado: async (id:number,RubroArticuloManufacturado:RubroArticuloManufacturado):Promise<RubroArticuloManufacturado>=>{
        const response = await fetch( `${BASE_URL}/api/v1/rubroArticuloManufacturado/${id}`,{
            method: "PUT",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RubroArticuloManufacturado)
        });

        const data = await response.json();
        return data;

    },

    deleteRubroArticuloManufacturado: async (id:number):Promise<void>=>{
        await fetch( `${BASE_URL}/api/v1/rubroArticuloManufacturado/${id}`,{
            method: "DELETE",
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ` + localStorage.getItem('token'),
            },
      
    });
    }    

}
