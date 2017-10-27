import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <VerticalTimeline>
            <VerticalTimelineElement
              key="1"
              title="Creative Director"
              subtitle="Miami, FL"
              content="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            />
            <VerticalTimelineElement
              key="2"
              title="Art Director"
              subtitle="San Francisco, CA"
              content="Creative Direction, User Experience, Visual Design, SEO, Online Marketing"
              date="2006 - 2011"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            />
            <VerticalTimelineElement
              key="3"
              title="Content Marketing for Web, Mobile and Social Media"
              subtitle="Online Course"
              content="Strategy, Social Media"
              date="April 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            />
            <VerticalTimelineElement
              key="4"
              title="Agile Development Scrum Master"
              subtitle="Certification"
              content="Creative Direction, User Experience, Visual Design"
              date="November 2012"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            />
            <VerticalTimelineElement
              key="5"
              title="Bachelor of Science in Interactive Digital Media Visual Imaging"
              subtitle="Bachelor Degree"
              content="Creative Direction, Visual Design"
              date="2002 - 2006"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            />
        </VerticalTimeline>
      </div>
    );
  }
}

export default App;
