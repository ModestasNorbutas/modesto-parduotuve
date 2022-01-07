import React, { useContext } from "react";
import { Container, Table, Row, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./AdminScreen.css"
import AdminItem from "./AdminItem/AdminItem";
import { ProductContext } from "../Context/ProductContext";


export default function AdminScreen() {

  const { products } = useContext(ProductContext);

  let history = useHistory();

  return (
    <Container>
      <Row className="row justify-content-center">
        <Card className="admin-screen">
          <h4>Manage available products:</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>
                  <Button
                    variant="success"
                    onClick={() => history.push("/admin/add")}
                  >
                    Add New
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map(product =>
                <AdminItem
                  key={product.id}
                  product={product}
                />
              )}
            </tbody>
          </Table>
        </Card>
      </Row>
    </Container>
  )
}
