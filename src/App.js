import React, { Component } from 'react';
import logo from './logo_grande.png';
import * as FontAwesome from 'react-icons/lib/fa'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';

class App extends Component {

  renderTimelineItems(details) {
    return details.map((entry) => {



      var IconType = '';

      switch(entry.icon) {
        case 'road':
          IconType = <FontAwesome.FaRoad />;
          break
        case 'fire':
          IconType = <FontAwesome.FaFire />;
          break
        case 'plane':
          IconType = <FontAwesome.FaPlane />;
          break
        case 'ambulance':
          IconType = <FontAwesome.FaAmbulance />;
          break
        case 'extinguisher':
          IconType = <FontAwesome.FaFireExtinguisher />;
          break
        default:
          IconType = '';
          break
      }

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
          icon={IconType}
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
          <a href="https://gazetacaldas.com" target="_blank" rel="noopener noreferrer" ><img src={logo} className="App-logo" alt="logo" /></a>
        </header>

        <div className="App-content-header container">
          <h1 className="App-title">{data.event}</h1>
          <p className="App-intro">
            {data.description}
          </p>
        </div>

        <div className="summary container">
          {data.area &&
            <div className="summary-item">
              <div className="summary-item__label">Área ardida</div>
              <div className="summary-item__content">{data.area}</div>
            </div>
          }

          {(data.number_injured || data.number_killed) &&
            <div className="summary-item">
              <div className="summary-item__inner">
                {data.number_killed &&
                  <div>
                    <div className="summary-item__label">Mortos</div>
                    <div className="summary-item__content">{data.number_killed}</div>
                  </div>
                }
                {data.number_injured &&
                  <div>
                    <div className="summary-item__label">Feridos</div>
                    <div className="summary-item__content">{data.number_injured}</div>
                  </div>
                }
              </div>
            </div>
          }

          {data.number_facilities_burned &&
            <div className="summary-item">
              <div className="summary-item__label">Danos Materiais</div>
              <div className="summary-item__content">{data.number_facilities_burned}</div>
            </div>
          }
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
              <li><a href="/">Home</a></li>
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
