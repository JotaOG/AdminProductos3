import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, navigate } from "@reach/router";

export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id).then((res) =>
      setProduct({
        ...res.data,
      })
    );
  }, [props.id]);

  const removeProductFromDom = () => props;
  const deleteProduct = (id) => {
    axios.delete("http://localhost:8000/api/product/" + id).then((res) => {
      removeProductFromDom(id);
      console.log(res);
      navigate("/");
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product Detail</h2>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <Button onClick={(e) => deleteProduct(product._id)}>
            Delete Product
          </Button>
          <br />
          <Link to="/">Back to Home</Link>
          <br />
          <Link to={"/" + product._id + "/edit"}>Edit Product</Link>
        </Col>
      </Row>
    </Container>
  );
};
