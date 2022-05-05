import { message } from "antd"
import { instance } from "."
import { CreateProductType } from "../types";

export const getAllProducts = async () => {
    try{
        const res = await instance.get("products");
        return res.data
    }catch(err:any){
        return message.error(err.message)
    }
}

export const getProductById = async (id:string | undefined) => {
    try{
        const res = await instance.get(`/products/${id}`)
        return res.data        
    }catch(err:any){
        return message.error(err.message)
    }
}


export const createProduct = async (form:CreateProductType) => {
    try{
        const res = await instance.post('products',form)
        return res.data
    }catch(err:any){
        return message.error(err.message)
    }
}

export const getCategories = async () => {
    try{
        const res = await instance.get("/categories")
        return res.data
    }catch(err:any){
        return message.error(err.message)
    }
}