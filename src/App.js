import React, { Component } from 'react';
import logo from './logo_grande.png';
import * as FontAwesome from 'react-icons/lib/fa'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';

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
          icon={<FontAwesome.FaFire />}
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

        {data.status === 'open' &&
          <div className="timeline-footer__dots">...</div>
        }
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
          <a className="App-back-link" href="https://gazetacaldas.com" target="_blank" rel="noopener noreferrer" >De Volta ao Site</a>
        </header>

        <div className="App-content-header container">
          <h1 className="App-title">{data.event}</h1>
          <p className="App-intro">
            {data.description}
          </p>
        </div>

        {this.renderTimeline(data)}

        <div className="timeline-footer">
          {data.status === 'open' &&
            <div className="timeline-footer__notice">Artigo em actualização</div>
          }
        </div>


        <div className="for-demo">
          <div className="container">
            <span className="for-demo__label">For editors lab demo</span>
            <ul className="for-demo__menu">
              <li><a href="/?event=2017-10-15_foz-arelho">Foz arelho</a></li>
              <li><a href="/?event=2017-10-15_olho-marinho-open">Olho Marinho - on going</a></li>
              <li><a href="/?event=2017-10-15_olho-marinho">Olho Marinho</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
