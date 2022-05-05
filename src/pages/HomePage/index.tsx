import React, { useState, useEffect } from "react";
import CreateButton from "../../components/CreateButton";
import FilterBar from "../../components/FilterBar";
import ProductItem from "../../components/Product";
import { ProductType } from "../../types";
import { useSearchParams } from "react-router-dom";

import { getAllProducts } from "../../api/fetch";

import styles from "./home-page.module.css";

const HomePage: React.FC = () => {
  const [allProducts, setAllPrducts] = useState<ProductType[] | []>([]);
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState({ search: "", category: "" });
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])

  const search = params.get("search");
  const category = params.get("category");

  const handleFiltersChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setParams({
      search: e.target.name === "search" ? e.target.value : filters.search,
      category:
        e.target.name === "category" ? e.target.value : filters.category,
    });
  };

  const _getAllProducts = async () => {
    const data = await getAllProducts();
    setAllPrducts(data);
  };

  const filterBySearch = () => {
    let searhedProducts: ProductType[] = [];
    for (let product of allProducts) {
      if (
        product.name
          .toLowerCase()
          .includes(search !== null ? search.toLowerCase() : "")
      ) {
        searhedProducts = [...searhedProducts, product];
      }
    }

    if (search === null || search === "") return allProducts

    return searhedProducts;
  };

  const filterByCategory = (searchedProducts: ProductType[]) => {
    let filteredCategory: ProductType[] = []
    for (let product of searchedProducts) {
      if (product.category.toLowerCase() === category?.toLowerCase()) {
        filteredCategory = [...filteredCategory, product]
      }
    }
    if (category === "" || category === null) return searchedProducts

    return filteredCategory
  };

  const filterProducts = () => {
    const filteredSearch = filterBySearch();
    const filteredCategory = filterByCategory(filteredSearch);

    return setFilteredProducts(filteredCategory)
  };


  useEffect(() => {
    _getAllProducts();
  }, []);


  useEffect(() => {
    if (allProducts.length > 0) {
      filterProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search, allProducts])

  return (
    <div>
      <FilterBar handleFiltersChange={handleFiltersChange} filters={filters} />
      <div className={styles.products}>
        {filteredProducts?.map((product: ProductType) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.button}>
        <CreateButton />
      </div>
    </div>
  );
};

export default HomePage;
