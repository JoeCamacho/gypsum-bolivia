import React from 'react'
import {styles} from '../styles/productcontainer.module.css';

export default function ProductContainer() {
 return (
  <div className="container">
          <div className="imagecontainer">
            <img src="/circle.png" alt=""/>
          </div>
          <div className="titlecontainer">
            <h2>Productos</h2>
          </div>
          <div className="textcontainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem doloribus dolorum impedit molestias hic cupiditate iure at cum voluptatum commodi quam similique culpa illum ratione reprehenderit saepe, rerum eaque!</p>
          </div>
        </div>
 )
}

