import React from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderClass({languageClass}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={languageClass.image} alt={languageClass.name} />
                <CardBody>
                    <CardText>{languageClass.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderPrereqs({prerequisites}){
    if(prerequisites){
        return(
            <div className="col-md-5 m-1">
                <h4>Prerequisites</h4>
                {prerequisites.map(prerequisite => 
                    {return (
                        <div key={prerequisite.id}>
                            <p>
                                {prerequisite.prereqs} <br />
                            </p>
                        </div>
                    );}
                )}
            </div>
        );
    }
    <div/>
}

function ClassInfo(props){
    if(props.languageClass){
        return (
        <div className="container">
            {/* I don't want breadcrumbs. */}
            {/* <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.campsite.name}</h2>
                    <hr />
                </div>
            </div> */}

            <div className="row">
                <RenderClass languageClass={props.languageClass} />
                <RenderPrereqs prerequisites={props.prerequisites} />
            </div>
        </div>
        );
    }
    else {return (<div />);}
}

export default CampsiteInfo;