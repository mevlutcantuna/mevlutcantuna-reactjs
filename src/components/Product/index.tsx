import React from "react";
import styles from "./product.module.css"

import { ProductType } from "../../types";
import { useNavigate } from "react-router-dom";



type ProductItemType = {
    product: ProductType
}

const Product: React.FC<ProductItemType> = ({ product }) => {
    const navigate = useNavigate()
    const goDetail = (id:string) => {
        return navigate(`/product/${id}`)
    }

    return (
        <div onClick={() => goDetail(product.id)} className={styles.product}>
            <div className={styles.product_image}>
                <img src={product.avatar} alt="product" />
            </div>
            <div className={styles.product_name}>
                {product.name}
            </div>
            <div>${product.price}</div>
        </div>
    )
}

export default Product;