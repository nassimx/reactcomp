import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from "react-bootstrap";
import Pic from '../Profile/ProfilePic.png';


export default function ProfilePhoto() {
    return (
        <div>
            <Container >
                <Row className="justify-content-md-center">

                    <Col xs="auto" md="auto">
                        <Image src={Pic} roundedCircle />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
