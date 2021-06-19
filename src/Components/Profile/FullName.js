import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './text.js'
export default function FullName() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="auto" md="auto">
                        <h1 className="justify-content-md-center">This is Nassim Frikha
                            <span
                                className="txt-rotate"
                                data-period="2000"
                                data-rotate='[ " Developer.", " Web Designer.", " Nerdy."]'></span>
                        </h1>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
