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
          <img src='/banner.png' alt="home banner" style={{ maxWidth: '60%' }} />
        </div>
        <div>
          <h2>Gypsum </h2>
          <h3>Construyendo Bolivia</h3>
          <p>37 años de experiencia en el mercado ofreciendo productos de alta calidad para los hogares bolivianos.</p>
        </div>
        {/* <Link className={btn}>LLamanos</Link> */}
      </section>
      <section className={ displaysection }>
        <ProductContainer />
        <ServicesContainer />
        <EquipmentContainer />
      </section>
    </Layout>
  )
}
