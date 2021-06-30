import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { CardMedia } from '@material-ui/core'

function RenderVideoItem({item}){
    return(
        <Card>
            {/* <CardImg src={item.image} alt={item.name} /> */}
            {/* <video autoPlay="false">
                <source src={item.video}/>
            </video> */}
            <CardMedia 
                component="iframe"
                title="test"
                height="280"
                muted="false"
                src={item.video}
            />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Videos(props){
    const ourVideos = props.videos.map(item => {
        return (
            <div key={item.id} className="col-md-5 m-1">
                <RenderVideoItem item={item} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {ourVideos}
            </div>
        </div>
    );
}

export default Videos;