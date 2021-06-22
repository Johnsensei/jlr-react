import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1 JLangRoom Way<br />
                        Nashville, TN 37211<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+16155551234"><i className="fa fa-phone" /> 1-615-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:classes@japaneselanguageroom.com"><i className="fa fa-envelope-o" /> classes@japaneselanguageroom.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;