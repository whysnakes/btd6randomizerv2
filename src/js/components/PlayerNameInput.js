import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';


const PlayerNameInput = (props) => {
    return (
        <Form.Group as={Row}>
            <Form.Label column sm="auto">
                Player {props.i}'s name:
            </Form.Label>
            <Col sm="auto">
                <Form.Control
                    type="text"
                    placeholder={"Player ".concat(props.i)}
                    value={props.value}
                    onChange={props.onChange}
                />
            </Col>
        </Form.Group>
    )
}


export default PlayerNameInput;
