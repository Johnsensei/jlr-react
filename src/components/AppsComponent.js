import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { APPS } from '../shared/apps';

function RenderAppItem({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Apps (props){    
    const ourApps = props.apps.map(myApp => {
        return (
            <div key={myApp.id} className="col-md-5 m-1">
                <RenderAppItem app={myApp} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {ourApps}
            </div>
        </div>
    );
}

export default Apps;