import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import HomePage from "./homePage";
import Product from "./Product";
import ProductsPage from "./ProductsPage";
class Exercise extends React.Component {
  products = [
    {
      title: "Stylish hat",
      imageUrl: "https://i.ibb.co/pPSQYfX/hat.jpg",
      price: 25,
      size: "Fits for all",
      id: 1,
    },
    {
      title: "Beautiful Jacket",
      imageUrl: "https://i.ibb.co/kq23hr4/jacket.jpg",
      price: 55,
      size: "Medium",
      id: 2,
    },
    {
      title: "Fashionable Jeans",
      imageUrl: "https://i.ibb.co/C62CZRy/jean.jpg",
      price: 39,
      size: "Medium",
      id: 3,
    },
    {
      title: "Smart tie",
      imageUrl: "https://i.ibb.co/z8GM1Mh/tie.jpg",
      price: 10,
      size: "Fits for all",
      id: 4,
    },
  ];
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage products={this.products} />;
        </Route>
        {this.products.map((product) => {
          return (
            <Route path={`/products/${product.id}`}>
              <Product product={product} id={product.id} linkVisible />
            </Route>
          );
        })}
      </BrowserRouter>
    );
  }
}
export default Exercise;
