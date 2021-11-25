import React, { useState } from "react";
import { Col, Container, Row, Form, FormGroup, Button, FormLabel, FormControl  } from "react-bootstrap";
import axios from "axios";

export const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
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
          <h2>Product Manager</h2>
          <Form onSubmit={onSubmitHandler}>
            <FormGroup>
            <FormLabel htmlFor="title">Title: </FormLabel>
            <FormControl
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              minLength='3'
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
              minLength='3'
            />
          </FormGroup>
            <Button type="submit" variant='primary'>Create Product</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
