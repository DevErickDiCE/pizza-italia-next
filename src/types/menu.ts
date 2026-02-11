// Types for Pizza Menu
export interface Pizza {
    id: string;
    name: string;
    description?: string;
    ingredients: string;
    prices: {
        mediana?: number;
        familiar?: number;
        plato?: number;
    };
    tags: string[];
    image: string;
}

export interface Category {
    id: string;
    name: string;
    items: Pizza[];
}

export interface RestaurantInfo {
    name: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    address: string;
}

export interface MenuData {
    restaurant: RestaurantInfo;
    categories: Category[];
}
