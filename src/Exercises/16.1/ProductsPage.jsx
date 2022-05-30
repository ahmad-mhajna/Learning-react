import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
class ProductsPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) => {
          return (
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          );
        })}
      </div>
    );
  }
}
export default ProductsPage;
