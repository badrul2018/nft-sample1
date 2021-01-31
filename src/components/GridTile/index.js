import React from 'react'

import AddIcon from './AddIcon'
import './styles.css'
import { Button } from '@chakra-ui/react'

const addToCart = () => {
  const { onAddToCartClicked, productId } = this.props
  onAddToCartClicked(productId)
}
 const  GridTile=({ price, name, description, image })=> {
    
    const image2 = (
      <img
        alt="Logo"
        src={process.env.PUBLIC_URL + image}
      />
    )
    return (
      <div className="tile">
        <div className="tileImage">
          {image2}
        </div>
        <div className="tileTitle">
          {name}
        </div>
        <div className="tileDescription">
          {description}
        </div>
        <div className="titleBottom">
          <div className="tilePrice">
            {price}
          </div>
          <div className="tileAdd">
            <Button
              onClick={addToCart}
              labelStyle={{ color: "#099CEC" }}
              label="Add"
              labelPosition="before"
              icon={<AddIcon />}
            />
          </div>
        </div>
      </div>
    )
  
}

export default  GridTile;
//Testing Code 
/*
GridTile.propTypes = {
  productId: PropTypes.number,
  price: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onAddToCartClicked: PropTypes.func.isRequired
}
*/
