import React from 'react'
import ProductItem from '../../components/ProductItem'

import './styles.css'

 const ProductsList=({products})=> {

  
    
    return (
      <div>
        <div className="productListWrapper">
          {products.map(product => (
            <ProductItem
              key={product.productId}
              product={product}
              //onAddToCartClicked={addToCart}
            />
          ))}
        </div>
      </div>
    )
  
}
export default  ProductsList;
//Testing code 
/*
ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
}
*/

