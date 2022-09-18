import React from 'react';
import { CartState } from '../context/Context';
import SingleService from './SingleServiceComponent';
import Filters from './FiltersComponent';

const Service = () => {

    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
      } = CartState();
 const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="services">
      {/* <Filters /> */}
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleService prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};


export default Service;