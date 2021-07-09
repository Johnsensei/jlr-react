import React from 'react';
import { Card, /*CardImg,*/ CardText, CardBody, CardTitle } from 'reactstrap';

function RenderVideoItem({item}){
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
      alt={item.name}
    />
  </div>;
    
    return(
        <Card>
            {videoItem}
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