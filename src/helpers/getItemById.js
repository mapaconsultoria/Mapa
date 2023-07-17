import { data } from "../api/data"


export const getItemById = (id) => {
    return data.find(item => item.id===id);  
}
