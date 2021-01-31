import React from 'react'
import ProductsList from './components/ProductsList'
import {Data} from './Data/index'
const ProductContainer = () => {
    console.log(Data)
    return (
        <ProductsList  products={Data}/>
    )
}

export default ProductContainer
