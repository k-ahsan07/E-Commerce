import "./style.css";
 import products from './src/data/api/products.json'
import { showProductContainer } from "./homeProductCards";
 console.log(products)
 

//  product display

showProductContainer(products);