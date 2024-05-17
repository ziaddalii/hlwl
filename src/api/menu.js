import { CATEGORY_PRODUCTS, MENU_CATEGORY } from "./constants";
import axios from 'axios';

// export async function get_menu_category(){
//     try {
//         const response = await fetch(MENU_CATEGORY);
        
//         const body = await response.json();
        
//         if (body.message === "success") {
//             throw new DOMException();
//         }
//         return body.data;
//     } catch (e) {
//             console.log(e);
//         return {
//             data:{},
//         };
//     }
// }

export const get_menu_category = async () => {
    const response = await axios.get(MENU_CATEGORY);
    return response.data;
  };
  export const get_category_products = async (category_id) => {
    const response = await axios.get(CATEGORY_PRODUCTS(category_id));
    return response.data;
  };
  