import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'react-bootstrap';


function CustomFormSwitch(props) {
    return (
        <Form.Group as={Row} className={props.className}>
            <Col sm="auto" className="pt-2">
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
            <Form.Label column sm="auto">
                {props.children}
            </Form.Label>
        </Form.Group>
    )
}

CustomFormSwitch.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
}


export default CustomFormSwitch;
