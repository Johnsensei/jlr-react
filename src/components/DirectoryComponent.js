import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardColumns } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClass: null
        };
    }

    onClassSelect(languageClass){
        this.setState({selectedClass: languageClass});
    }

    renderSelectedClass(languageClass){
        if(languageClass){
            return(
                <Card>
                    <CardImg top src={languageClass.image} alt={languageClass.name} />
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
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.classes.map(languageClass => {
            return (
                <div key={languageClass.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onClassSelect(languageClass)}>
                        <CardImg width="100%" src={languageClass.image} alt={languageClass.name} />
                        <CardImgOverlay>
                            <CardTitle>{languageClass.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedClass(this.state.selectedClass)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;