export interface ProductType {
    createdAt: number;
    name: string;
    avatar: string;
    developerEmail: string;
    price: number;
    id: string;
    category: string;
    description: string;
}

export interface CategoryType {
    createdAt: number;
    name: string;
    id: string;
}

export interface CreateProductType {
    name:string;
    description:string;
    category:string;
    developerEmail:string;
    price:number;
    avatar:string

}