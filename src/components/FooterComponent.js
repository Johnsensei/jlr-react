import React from 'react';
import { Link } from 'react-router-dom';

function Footer (props){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Classes</Link></li>
                            <li><Link to='/apps'>Apps</Link></li>
                            <li><Link to='/videos'>Videos</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/JLangRoom"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/JLangRoom"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/jlangroom/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCoenwSV-YumZjZzmEAOc4ew"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+16155551234"><i className="fa fa-phone" /> 1-615-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:classes@japaneselanguageroom.com"><i className="fa fa-envelope-o" /> classes@japaneselanguageroom.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;