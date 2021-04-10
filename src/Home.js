import React from 'react'
import './Home.css'
import Product from './Product'




function Home() {
    return (
        <div className="home">
            <div className="home__container">
              
            <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />  
                <div className="home__row">
                    <Product
                    id="122222"
                     title="Puriface Spirulina Eye Gel Masks - K Beauty Skin Care Under Eye Treatment for Anti-Aging/Dark Circle/Puffiness/Deep"
                     price={19.9} 
                     rating={5}

                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"/>
                    <Product 
                    id="122544"
                    title="23Pcs Mario Brothers Action Figures Kids Toys Cake Toppers Collection Playset" 
                    price={25} 
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"/>
                    <Product 
                    id="1276222"
                    title="Jensen JTV19DC HD Ready 19 Inch 
                    12V DC RV LED TV  
                    Dual Function Wireless Remote Control, Black
                    4.4 out of 5 stars 164"
                     price={30}
                     rating={2}
                      image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"/>
                    <Product
                    id="1222982"
                     price={28} 
                     title="Amazon Basics Collapsible Fabric Storage Cubes"
                     rating={6}
                      image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
                    

                    
                </div>
                <div className="home__row">
                       <Product
                       id="12225232"
                       title="Govee Led Fairy Lights Bedroom, 66 Feet Fairy Lights Plug in, 200 LEDs Remote"
                       price={20}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/61wEWWcMgcL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                       /> 
                       <Product
                       id="113222222"
                       title="Ambaret LED Rope Light Twinkle Battery Operated String Lights 40Ft 120 LED"
                       price={11}
                       rating={4}
                       image="https://images-na.ssl-images-amazon.com/images/I/71EILU0ADnL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                       /> 
                       <Product
                       id="12522200"
                       title="USB Fairy String Lights with Remote and Power Adapter, 66 Feet 200 Led Firefly"
                       price={11}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/716IPyI4nWL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                       /> 
                       <Product
                       id="122222125"
                       title="2 Pack 48 FT ADDLON Outdoor String Lights Commercial Grade Weatherproof Strand 16 Edison"
                       price={17}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/61mfkKKk98L.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                       /> 
                </div>
                <div className="home__row">
                       <Product
                       id="122222812"
                       title="Control Fairy Lights with 8 Scence Modes 4 Timing Options USB Fairy Lights for Indoor Outdoor Decoration Warm White
                       "
                       price={30}
                       rating={5}
                       image="https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
                       
                       /> 
                       <Product
                       id="12222287"
                       title="Fairy Light, 8 Color Changing Waterproof Strip Light for Bedroom Garden Outdoor"
                       price={50}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/81pxlN2HYgL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                       /> 
                       <Product
                       id="12457890"      
                       title="Lights for Bedroom Wall Ceiling Christmas Tree Wreath Craft Wedding"
                       price={59}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/616xxVyXxLL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                       
                       /> 
                       <Product
                       id="1567890"
                       title="Vintage Bulbs 15 Hanging Sockets, UL Listed Heavy-Duty Decorative Café Patio Lights for Bistro Garden"
                       price={20}
                       rating={3}
                       image="https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg" 
                       /> 
                </div>
            </div>
        </div>
    )
}

export default Home
