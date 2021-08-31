import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';


function CustomFormSwitch(props) {
    return (
        <Form.Group as={Row} className={ "mx-2 " + (props.className === undefined? "" : props.className)}>
            <Col sm={1} className="px-0 pt-2">
                <div className="form-check form-switch">
                    <input
                        disabled={props.disabled}
                        className="form-check-input"
                        type="checkbox"
                        checked={props.checked}
                        onChange={props.onChange}
                    />
                </div>
            </Col>
            <Form.Label column sm={11} className="text-start ps-2">
                {props.children}
            </Form.Label>
        </Form.Group>
    )
}


export default CustomFormSwitch;
