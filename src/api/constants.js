export const BASE_URL = `https://resturant.asusapps.com`;

// Menu Category
export const MENU_CATEGORY = `${BASE_URL}/api/v1/catogry`


export const CATEGORY_PRODUCTS = (category_id) =>
    `${BASE_URL}/api/v1/catogry/${category_id}/products`;