import React from 'react';
import { Form, Button } from 'react-bootstrap';

import TextBTD6Font from './TextBTD6Font';
import BlackBorder from './BlackBorder';


function OptionsFormContainer(props) {
    return (
        <BlackBorder>
            <TextBTD6Font as={"h2"} className="text-center">
                Options
            </TextBTD6Font>
            <Form>
                {props.children}
                <Button type="button" id="generator_btn" className="col-3 btn btn-primary mt-5 mb-3" onClick={props.onSubmit}>
                    Generate
                </Button>
            </Form>
        </BlackBorder>
    );
}


export default OptionsFormContainer;
