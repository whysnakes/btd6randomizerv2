import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';


function CustomFormSlider(props) {
    return (
        <Form.Group as={Row} className={props.className} controlId={props.controlId}>
            <Form.Label column sm="auto">
                {props.children}
            </Form.Label>
            <Col sm="auto">
                <Form.Control
                    type="range"
                    min={props.min}
                    max={props.max}
                    disabled={props.disabled}
                    value={props.value}
                    onChange={props.onChange}
                />
            </Col>
            <Col xs="auto">
                <Form.Control
                    type="number"
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    readOnly
                />
            </Col>
        </Form.Group>
    )
}


export default CustomFormSlider;
