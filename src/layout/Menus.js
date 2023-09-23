import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home</Link>
    </li>
  
  </Fragment>
);

export const PagesDasktop = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
    <li >
  
          <Link href="/services">all services</Link>
      <ul>
        <li>
        </li>
        <li>
          <Link href="/service-details">service details</Link>
        </li>
      </ul>
      <div className="dropdown-btn">
        
      </div>
    </li>
  
    <li>
      <Link href="/farmers">Farmers</Link>
    </li>
   
  </Fragment>
);
export const PagesMobile = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
    <li>
      <Link href="/services">all services</Link>
    </li>
    <li>
      <Link href="/service-details">service details</Link>
    </li>
   
    <li>
      <Link href="/farmers">Farmers</Link>
    </li>
  
  </Fragment>
);
export const Portfolio = () => (
  <Fragment>
    <li>
      <Link href="/portfolio-grid">Gallery</Link>
    </li>
   
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">blog</Link>
    </li>

  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop-grid">shop</Link>
    </li>
  
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
