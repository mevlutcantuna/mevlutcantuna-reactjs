import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/fetch";
import { CategoryType } from "../../types";

import styles from "./filter-bar.module.css";

type FilterBarProps = {
  filters: { search: string; category: string };
  handleFiltersChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  handleFiltersChange,
}) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const _getCategories = async () => {
    const res = await getCategories();
    setCategories(res);
  };

  useEffect(() => {
    _getCategories();
  }, []);

  return (
    <div className={styles.filterbar}>
      <input
        name="search"
        value={filters.search}
        onChange={handleFiltersChange}
        className={styles.search}
        placeholder="Apple Watch,Samsung S21,Macbook Pro..."
      />
      <select
        name="category"
        onChange={handleFiltersChange}
        className={styles.categories}
        defaultValue="Categories"
      >
        <option value="Categories" disabled hidden>
          Categories
        </option>
        {categories.map((item: CategoryType) => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
