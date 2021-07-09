import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import ClassInfo from './ClassInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Apps from './AppsComponent'
import Videos from './VideosComponent'
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LANGUAGECLASSES } from '../shared/languageclasses';
import { PREREQUISITES } from '../shared/prerequisites';
import { APPS } from '../shared/apps';
import { VIDEOS } from '../shared/videos';

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            languageClasses: LANGUAGECLASSES,
            prerequisites: PREREQUISITES,
            apps: APPS,
            videos: VIDEOS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                    languageClass={this.state.languageClasses.filter(languageClass => languageClass.featured)[0]}
                    app={this.state.apps.filter(app => app.featured)[0]}
                    video={this.state.videos.filter(video => video.featured)[0]}
                />
            );
        };

        const ClassWithId = ({match}) => {
            return (
                <ClassInfo 
                    languageClass={this.state.languageClasses.filter(languageClass => languageClass.id === +match.params.classId)[0]}
                    prerequisites={this.state.prerequisites.filter(prerequisite => prerequisite.classId === +match.params.classId)}
                />
            );
        };
        
        return (
            <div>
                <Header />
                        <Switch  >
                            <Route path="/home" component={HomePage}/>
                            <Route exact path="/languageclasses" render = {() => <Directory languageClasses={this.state.languageClasses} />} />
                            <Route path="/languageclasses/:classId" component={ClassWithId} />
                            <Route exact path="/apps" render = {() => <Apps apps={this.state.apps} />} />
                            <Route exact path="/videos" render = {() => <Videos videos={this.state.videos} />} />
                            <Route exact path="/contactus" component={Contact} />
                            <Redirect to="/home" />
                        </Switch>
                <Footer />
            </div>
        );
    };

}

export default Main;