import React from 'react';
import {Image} from '@chakra-ui/react'

export  const Logo =(props)=>{
return <Image boxSize='50px' mr={2} objectFit='cover' src={process.env.PUBLIC_URL + "NFT_Alley_Final.jpg"} {...props} />

}
