const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <div className="mb-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        </div>
        <p className="text-lg mb-2">Price: {product.price}</p>
        <p className="text-lg mb-4">Discount: {product.discount}</p>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={() => alert('Added to cart!')}>Add to Cart</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => alert('Purchased!')}>Purchase</button>
        </div>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};
export default ProductModal
