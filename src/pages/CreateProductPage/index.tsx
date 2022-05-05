import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/fetch";
import styles from "./create-product-page.module.css";

import { CategoryType } from "../../types";
import { getCategories } from "../../api/fetch";
import { message } from "antd";

const CreateProductPage: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        avatar: "",
        category: "",
        price: 0,
    });
    const [categories, setCategories] = useState<CategoryType[]>([])

    const _getCategories = async () => {
        const res = await getCategories()
        setCategories(res)
    }

    useEffect(() => {
        _getCategories()
    }, [])
    const navigate = useNavigate();

    const handleFormChage = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const submit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (form.name === "" || form.description === "" || form.avatar === "" || form.price === 0 || form.category === "") {
            return message.error("please provide all inputs...")
        }

        const product = { ...form, developerEmail: "mttuna90@gmail.com" }

        const res = await createProduct(product);
        if (res.id) {
            return navigate(`/product/${res.id}`, { replace: true })
        }

    }

    return (
        <div className={styles.page_wrapper}>
            <span className={styles.title}>Create Product</span>
            <form onSubmit={submit} className={styles.form}>
                <input
                    className={styles.input}
                    name="name"
                    value={form.name}
                    onChange={handleFormChage}
                    type="text"
                    placeholder="Product Name"
                />
                <textarea
                    className={styles.input}

                    name="description"
                    value={form.description}
                    onChange={handleFormChage}
                    placeholder="Description"
                />
                <input
                    className={styles.input}

                    name="avatar"
                    value={form.avatar}
                    onChange={handleFormChage}
                    type="text"
                    placeholder="Image URL"
                />
                <select
                    className={styles.input}
                    name="category"
                    defaultValue="Categories"
                    onChange={handleFormChage}
                >
                    <option value="Categories" disabled hidden>Categories</option>
                    {categories.map((item: CategoryType) => <option value={item.name} key={item.id}>{item.name}</option>)}
                </select>
                <input
                    className={styles.input}
                    name="price"
                    value={form.price}
                    onChange={handleFormChage}
                    type="number"
                    placeholder="Price"
                    min={0}
                />
                <button onClick={submit} className={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default CreateProductPage;
