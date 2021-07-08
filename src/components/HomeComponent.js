import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { CardMedia } from '@material-ui/core'

function RenderCard({item}){
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

function Home (props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.languageClass} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.app} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.video} />
                </div>
            </div>
        </div>
    );
}

export default Home;