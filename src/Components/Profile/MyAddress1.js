import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default function MyAddress1() {
    return (
        <div>
            <Container >
                <Row className="justify-content-md-center">

                    <Col xs="auto" md="auto">
                        <h2>Contact Me :</h2>
                        <a href="mailto:mr.nassimfr@gmail.com">Click Here</a>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}
