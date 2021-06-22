import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({languageClass}){
    return(
        <Card>
            <Link to={`/languageclasses/${languageClass.id}`} >
                <CardImg width="100%" src={languageClass.image} alt={languageClass.name} />
                <CardImgOverlay>
                    <CardTitle>{languageClass.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props){
    const directory = props.languageClasses.map(languageClass => {
        return (
            <div key={languageClass.id} className="col-md-5 m-1">
                <RenderDirectoryItem languageClass={languageClass} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}


export default Directory;