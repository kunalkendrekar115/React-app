import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Product from './Product';
import './App.css';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { arr: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] }
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    {
                        this.state.arr.map(() => {
                            return (<Col sm={4}>
                                <div style={{ padding: 10 }}>
                                    <Product></Product>
                                </div>
                            </Col>)
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default ProductList;