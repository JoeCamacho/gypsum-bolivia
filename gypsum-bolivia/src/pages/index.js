import React from "react";
import Layout from '../components/Layout';
import { header } from '../styles/home.module.css';
import { displaysection } from '../styles/productcontainer.module.css'
import ProductContainer from '../components/ProductContainer';
import Link from 'gatsby';
import ServicesContainer from "../components/ServicesContainer";
import EquipmentContainer from "../components/EquipmentContainer";

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <img src='/banner.png' alt="home banner" style={{ maxWidth: '100%' }} />
        </div>
        <div>
          <h2>Gypsum </h2>
          <h3>Construyendo Bolivia</h3>
          <p>37 años de experiencia en el mercado ofreciendo productos de alta calidad para los hogares bolivianos.</p>
        </div>
        {/* <Link className={btn}>LLamanos</Link> */}
      </section>
      <hr style={{color:'black'}} />
      <section className={ displaysection }>
        <ProductContainer />
        <ServicesContainer />
        <EquipmentContainer />
      </section>
      <section className='aboutsection'>
        <div className="container">
          <div className="textcontainer">
            <h1>Gypsum Bolivia</h1>
            <h3>Construyendo Bolivia</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti necessitatibus temporibus explicabo, porro rem accusamus non officia tenetur harum odio. Distinctio veritatis eos maiores veniam culpa reiciendis earum alias tenetur?</p><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente porro, molestias provident mollitia eveniet numquam cupiditate maiores nobis amet quos quis sed doloribus reprehenderit. Doloribus earum esse laudantium molestiae quam?</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
