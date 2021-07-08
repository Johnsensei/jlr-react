import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { CardMedia } from '@material-ui/core'

function RenderAppItem({item}){
    const videoItem = <CardMedia component="iframe" title="test" height="240" muted="false" src={item.video} />;
    const imageItem = <CardImg src={item.image} alt={item.name} />;

    return(
        <Card>
            {(item.video) ? videoItem : imageItem}
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Apps (props){

    const ourApps = props.apps.map(item => {
        return (
            <div key={item.id} className="col-md-5 m-1">
                <RenderAppItem item={item} />
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