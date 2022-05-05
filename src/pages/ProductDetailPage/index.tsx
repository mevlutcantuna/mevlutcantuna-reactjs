import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../api/fetch";
import { ProductType } from "../../types";
import styles from "./product-detail-page.module.css"

const ProductDetailPage: React.FC = () => {
    const [productDetails, setProductDetails] = useState<ProductType>();
    const { id } = useParams();

    const _getProductById = async () => {
        const res = await getProductById(id)
        setProductDetails(res)
    }

    useEffect(() => {
        _getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.product_detail}>
            <div className={styles.product_detail_top}>
                <img className={styles.product_detail_image} src={productDetails?.avatar} alt="product" />
                <div className={styles.product_detail_texts}>
                    <span >{productDetails?.name}</span>
                    <span>$ {productDetails?.price}</span>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.product_detail_description}>
                <span>Description</span>
                <span>{productDetails?.description}</span>
            </div>
        </div>
    )
}

export default ProductDetailPage