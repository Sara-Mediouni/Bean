import React, { useState } from 'react';
import OrderModal from '../components/OrderModal';
import { useEffect } from 'react';
import axios from 'axios';
import categoryImages from '../data/categoryImages';
const bgColors = [
  "bg-[#ffe0d0]",
  "bg-[#FFCAD4]",
  "bg-[#D8E2DC]",
  "bg-brown-500"

];
const MenuPage = () => {
  const [category, setCategory] = useState("")
  const [Drink, setDrink] = useState([])
  const [Categories, setCategories] = useState()
  const [selectedProduct, setSelectedProduct] = useState(null);
  const getDrinks=()=>{
    axios.get(`http://localhost:4000/api/drink/category/${category}`)
    .then((response)=>{
      console.log(response);
      setDrink(response.data)
      
    }).catch((error)=>{
      console.log('Error',error)
    })
  }
  const getCategories=()=>{
    axios.get(`http://localhost:4000/api/drink/getallcategories`)
    .then((response)=>{
      console.log(response);
      setCategories(response.data)
    }).catch((error)=>{
      console.log('Error',error)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      await getDrinks();
      await getCategories();
    };
  
    fetchData();
  }, [category]);
  return (
    <section className=" min-h-screen px-6 py-10 mt-20">
      <h2 className="text-4xl font-bold text-[#2b1e17] mb-10 text-center">Explore Our Menu</h2>

      {/* Category Images */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {Categories?.map((category, idx) => (
          <div key={idx} onClick={()=>setCategory(category)}
          className="flex flex-col items-center hover:scale-110">
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden shadow-md border-4 border-[#e76f51]">
              <img src={categoryImages[category]} alt={category} className="w-full h-full object-cover" />
            </div>
            <p className="text-[#2b1e17] mt-2 font-semibold">{category}</p>
          </div>
        ))}
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 mt-20 md:grid-cols-4 gap-8">
        {Drink.map((product, idx) => {
          const randomColor = bgColors[idx % bgColors.length];
          return(
          <div key={idx} className="flex flex-col items-center space-y-4">
            <div className={`w-[240px] h-[240px] rounded-full flex items-center justify-center ${randomColor} relative`}>
              <img src={`http://localhost:4000/uploads/${product.image}`} alt={product.name} className="w-[300px]" />
              <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                ⭐ {product.rating}
              </div>
            </div>
            <p className="text-[#2b1e17] font-semibold text-lg">{product.name}</p>
            <p className="text-[#2b1e17] font-semibold text-lg">{product.price} TND</p>
            <button onClick={() => setSelectedProduct(product._id)} className="text-[#e76f51] text-sm font-medium">Add to order +</button>
          </div>
        )})}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default MenuPage;
