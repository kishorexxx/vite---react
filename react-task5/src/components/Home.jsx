import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = () => {

  const {
    state: { products },
    productState: { searchQuery },
  } = CartState();
 
  const transformProducts = () => {
    let sortedProducts = products;
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <div className="home">
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home