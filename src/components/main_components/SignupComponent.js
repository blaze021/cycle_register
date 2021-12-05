import React from 'react';
import NavComponent from '../navcomponents/Nav_component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FooterComponent from '../misc_components/FooterComponent';

function SignupComponent(){
    return (
        <div>
            <NavComponent/>
            <div>
            <Container fluid className="login_bg">
                    <Row className="justify-content-center">
                        <Col sm={11} className="mx-auto">
                            <Container flex="true">
                                <br />
                                <Row className="justify-content-center mt-5">
                                    <Col md={6} className="my-auto" >
                                        <div className="gra-chan_login d-none d-md-block" />
                                    </Col>
                                    <Col md={6} className="my-auto">
                                        <Container>
                                            <Row className="justify-content-center">
                                                <Col md={10} className="mx-auto">
                                                    <br />

                                                    <Card bg="transparent" className="signup-card">
                                                        <br />
                                                        <div className="mx-auto">
                                                            <h3 className="logo-name text-danger font-weight-bold">
                                                                Sign Up
														</h3>
                                                        </div>
                                                        <br />

                                                        <Card.Body>
                                                            <Form bg="transparent">
                                                                <Form.Group controlId="formAvatar" bg="transparent">
                                                                    <Form.Label className="slogan-2 text-danger">
                                                                        Enter your avatar name
																</Form.Label>
                                                                    <Form.Control
                                                                        type="name"
                                                                        name="avaName"
                                                                        placeholder="Avatar"
                                                                        className="slogan-2 "
                                                                        bg="warning"
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group controlId="formEmail" bg="transparent">
                                                                    <Form.Label className="slogan-2 text-danger">
                                                                        Enter your email address
																</Form.Label>
                                                                    <Form.Control
                                                                        type="email"
                                                                        name="uEmail"
                                                                        placeholder="Email"
                                                                        className="slogan-2 "
                                                                        bg="warning"
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group controlId="formPassword">
                                                                    <Form.Label className="slogan-2 text-danger">
                                                                        Password
																</Form.Label>
                                                                    <Form.Control
                                                                        type="password"
                                                                        name="uPassword"
                                                                        placeholder="Password"
                                                                        className="slogan-2 "
                                                                    />
                                                                </Form.Group>
                                                                <Button
                                                                    variant="primary"
                                                                    id="submitButton"
                                                                    className="mt-3 slogan-2"
                                                                >
                                                                    Login
															</Button>
                                                            </Form>
                                                            
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default SignupComponent;