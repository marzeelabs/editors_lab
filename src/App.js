import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Whatshot from 'material-ui-icons/Whatshot';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class App extends Component {

  renderTimelineItems(details) {
    return details.map((entry) => {
      return (
        <VerticalTimelineElement
          key={entry.key}
          title={entry.title}
          date={entry.date}
          subtitle={entry.subtitle}
          content={entry.content}
          iconStyle={{
            background: "#f00",
            color: "#fff"
          }}
          icon={<Whatshot />}
        />
      );
    });
  } 

  renderTimeline(data) {
    // Check if a render function exists for the paragraph type and call it
    if (!data.details) {
      return null;
    }

    return (
      <VerticalTimeline>
        {this.renderTimelineItems(data.details)}
      </VerticalTimeline>
    );
  }

  render() {
    function getUrlQueryParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      const results = regex.exec(url);
      if (!results) return 'default';
      if (!results[2]) return 'default';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    const jsonName = getUrlQueryParameterByName('event');
    const data = require('./data/' + jsonName + '.json');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{data.event}</h1>
        </header>
        <p className="App-intro">
          {data.description}
        </p>

        {this.renderTimeline(data)}
      </div>
    );
  }
}

export default App;
