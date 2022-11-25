import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">

        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <Link href={`/product/${product}`}> 
        <img
          src={urlFor(image)} className="footer-banner-image"
          alt='footerbannerimage'
        />
        </Link>

        <div className="right">
        <h3>{midText}</h3>
          <p>{smallText}</p>
          <p>{desc}</p> 
        <div>
          <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
          </Link>
        </div>
        </div>
         
       
      </div>
    </div>
  )
}

export default FooterBanner