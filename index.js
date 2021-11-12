import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoBox = ( props ) => {

    const Styles = {
        width: "100%",
        marginTop: "147%"
    }

    return (
        <div style={Styles}>
        <Accordion>
            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Link Info
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                <div>{`Link Address: ${props.sa}`}</div>
                <div>{`community board: ${props.cb}`}</div>
                <div>{`lat: ${props.lat}`}</div>
                <div>{`lon: ${props.lon}`}</div>
                </Card.Body>
            </Accordion.Collapse>
            </Card>    
        </Accordion>
        </div>
    )
};

export default InfoBox;