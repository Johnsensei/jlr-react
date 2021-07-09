import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { CardMedia } from '@material-ui/core'

function RenderCard({item}){
    
    const imageItem = <CardImg src={item.image} alt={item.name} />;
    const videoItem = <div
    className="video"
    style={{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 25,
      height: 0
    }}
  >
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
      src={item.video}
      frameBorder="0"
    />
  </div>;

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
                <div className="col-xl m-1">
                    <RenderCard item={props.languageClass} />
                </div>
                <div className="col-xl m-1">
                    <RenderCard item={props.app} />
                </div>
                <div className="col-xl m-1">
                    <RenderCard item={props.video} />
                </div>
            </div>
        </div>
    );
}

export default Home;