import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderClass({languageClass}){
    return(
        <div key={languageClass.id} className="col-md-5 m-1">
            <Card>
                {/* TODO: This Card Image is broken for some reason. Tried adding the key to the div. */}
                {/* <CardImg width="100%" src={languageClass.image} alt={languageClass.name} /> */}
                   <CardBody>
                        <CardTitle>{languageClass.name}</CardTitle>
                        <CardText>{languageClass.description}</CardText>
                       <ul>
                             {languageClass.content.map(function(listValue){
                                return <li>{listValue}</li>
                            })}
                        </ul>
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
            <div className="row">
                <RenderClass languageClass={props.languageClass} />
                <RenderPrereqs prerequisites={props.prerequisites} />
            </div>
        </div>
        );
    }
    return <div />
}

export default ClassInfo;