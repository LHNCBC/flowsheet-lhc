import React from "react";
import "./pageBanner.css";
import LHCLogo from '../LHNCBC_white.svg';

class PageBanner extends React.Component {

  /**
   * Display COVID banner if it was not closed before.
   */
  componentDidMount() {
    if (!sessionStorage.getItem('hideCovidBanner')) {
      setTimeout(()=> {document.querySelector('#covid-banner').style.display = 'flex';}, 1)
    }
    else {
      setTimeout(()=> {document.querySelector('#covid-banner').style.display = 'none';}, 1)
    }    
  }

  /**
   * funciton to close the COVID banner
   */
  dismissCovidBanner() {
    document.querySelector('#covid-banner').style.display = 'none';
    sessionStorage.setItem('hideCovidBanner', true);
  }

  render() {
    
    return (
      <React.Fragment>
        
        <div id="lhc-logo">
          <a href="https://lhncbc.nlm.nih.gov" title="Lister Hill National Center for Biomedical Communications">
            <img src={LHCLogo} alt="NIH/NLM/LHNCBC logo"/>
          </a>
        </div>
        <ul id="covid-banner">
          <li>COVID-19 information: </li>
          <li>
            <a href="https://www.cdc.gov/coronavirus/" target="_blank">
              Get the latest public health information from CDC
            </a>
          </li>
          <li>
            <a href="http://www.covid19.nih.gov/" target="_blank">
              Get the latest research information from NIH
            </a> |
            <a href="https://salud.nih.gov/covid-19/" target="_blank">
              Español
            </a>
          </li>
          <li>
            <a href="https://combatcovid.hhs.gov/" target="_blank">
              Learn more about COVID-19 and you from HHS
            </a>
          </li>
          <li>
            <button title="Dismiss" onClick={this.dismissCovidBanner}>
              <span aria-hidden="true">&#215;</span>
            </button>
          </li>
        </ul>

      </React.Fragment>
    );
  }
}

export default PageBanner;