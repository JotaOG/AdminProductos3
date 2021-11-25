import React from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export const ProductList = (props) => {
  const { removeProductFromDom } = props;

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:8000/api/product/" + id)
      .then((res) => {
        removeProductFromDom(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product List</h2>
          {props.products.map((product, idx) => {
            return (
              <p key={idx}>
                <Link to={"/product/" + product._id}>{product.title}</Link>
                <span> </span>
                <button onClick={(e) => deleteProduct(product._id)}>
                  Delete Product
                </button>
              </p>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
