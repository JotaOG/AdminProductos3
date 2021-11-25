import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Button,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link } from "@reach/router";

export const ProductUpdate = (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
      setDescription(res.data.description);
    });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/product/" + id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Update Product</h2>
          <Form onSubmit={updateProduct}>
            <FormGroup>
              <FormLabel htmlFor="title">Title: </FormLabel>
              <FormControl
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                minLength="3"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="price">Price: </FormLabel>
              <FormControl
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                min={0}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="description">Description: </FormLabel>
              <FormControl
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                minLength="3"
              />
            </FormGroup>
            <Button type="submit" variant="primary">
              Update Product
            </Button>
          </Form>
          <Link to="/">Back to Home</Link>
        </Col>
      </Row>
    </Container>
  );
};
