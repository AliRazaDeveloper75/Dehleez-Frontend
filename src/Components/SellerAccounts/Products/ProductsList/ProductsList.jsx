import React, { useContext, useEffect, useState } from "react";
import { SellerContext } from "../../Accounts/SellerContext";

const ProductsList = () => {
  const { seller } = useContext(SellerContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (seller && seller.seller) {
        try {
          const response = await fetch(
            `http://39.61.51.195:8004/products?seller_id=${seller.seller.id}`
          );
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [seller]);
console.log("seller data", seller.id)
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="py-5">
            <p className="text-lg">Seller ID: {seller?.seller?.id || "N/A"}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  key={product.id}
                >
                  <div className="flex justify-center items-center h-25">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover p-5"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl text-gray-700 font-bold">{product.name}</h2>
                    <h2 className="text-xl text-gray-700 font-bold">{product.seller_id}</h2>
                    <p className="text-gray-700 mt-2">{product.description}</p>
                    <p className="text-red-500 text-lg font-semibold mt-4">
                      Price: ${product.price}
                    </p>
                    <p className="text-green-500 text-sm mt-2">
                      Stock: {product.stock}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for this seller.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsList;
