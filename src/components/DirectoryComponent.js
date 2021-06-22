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
            {/* I don't want breadcrumbs on my site. */}
            {/* <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div> */}
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

// class Directory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedClass: null
//         };
//     }

//     onClassSelect(languageClass){
//         this.setState({selectedClass: languageClass});
//     }

//     renderSelectedClass(languageClass){
//         if(languageClass){
//             return(
//                 <Card>
//                     <CardImg top src={languageClass.image} alt={languageClass.name} />
//                     <CardBody>
//                         <CardTitle>{languageClass.name}</CardTitle>
//                         <CardText>{languageClass.description}</CardText>
//                         <ul>
//                             {languageClass.content.map(function(listValue){
//                                 return <li>{listValue}</li>
//                             })}
//                         </ul>
//                     </CardBody>
//                 </Card>
//             );
//         }
//         return <div />;
//     }

//     render() {
//         const directory = this.props.classes.map(languageClass => {
//             return (
//                 <div key={languageClass.id} className="col-md-5 m-1">
//                     <Card onClick={() => this.onClassSelect(languageClass)}>
//                         <CardImg width="100%" src={languageClass.image} alt={languageClass.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{languageClass.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//                 <div className="row">
//                     <div className="col-md-5 m-1">
//                         {this.renderSelectedClass(this.state.selectedClass)}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Directory;