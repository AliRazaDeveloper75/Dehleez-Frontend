import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CategorySelect from "../CategorySelect/CategorySelect";
import { useNavigate } from "react-router-dom";
import { SellerContext } from "../../Accounts/SellerContext";

const CreateProduct = () => {
  const { seller } = useContext(SellerContext);

  useEffect(() => {
    if (seller) {
      console.log("Seller Data in Dashboard", seller);
      setFormData((prevFormData) => ({
        ...prevFormData,
        seller_id: seller.seller.id,
      }));
    }
  }, [seller]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null,
    category_Id: "",
    is_deleted: false,
    seller_id: "", // Initialized as empty string, will be set in useEffect
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCategorySelect = (categoryId) => {
    setFormData({
      ...formData,
      category_Id: categoryId,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === "image") {
        data.append(key, formData[key], formData[key]?.name);
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://39.61.51.195:8004/product-create/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Product created successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null,
        category_Id: "",
        is_deleted: false,
        seller_id: seller.seller.id, // Keep the seller_id as is
      });
    } catch (error) {
      console.error("Error response:", error.response);
      alert(
        "Failed to add product: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      {seller && seller.seller ? (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6">Create Product</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="seller_id"
                >
                  Seller ID
                </label>
                <div className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <p>{formData.seller_id || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <CategorySelect onSelect={handleCategorySelect} />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CreateProduct;
