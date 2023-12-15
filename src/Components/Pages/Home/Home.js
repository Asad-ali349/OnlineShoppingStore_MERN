import React from 'react'
import { Typography } from '@mui/material'
import Slider from '../../Slidercomp/Slider'
import Salecomp from '../../Salecomp/Sale'
import Tabcomp from '../../Tabcom/Tab'
import Featured from '../../Featuredcategory/Featuredcategory'
import Footerimage from '../../Footerimage/Footerimage'
import Reviewscomp from '../../Reviews/Saction'





const Home = () => {
  return (
    <div>
         <Slider/>
        <Salecomp />
        <Tabcomp/>
        <Featured/>
        <Footerimage />
        <Reviewscomp/>
  


    </div>
  )
}

export default Home
