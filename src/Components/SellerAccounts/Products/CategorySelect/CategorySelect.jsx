import React, { useEffect, useState } from 'react';

const CategorySelect = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://39.61.51.195:8004/account/category/');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Category</label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
