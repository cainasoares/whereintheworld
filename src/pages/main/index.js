import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class Main extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    this.loadCountries();
  }

  loadCountries = async () => {
    const response = await api.get();

    this.setState({ countries: response.data });

    console.log(this.state);
    
  };

  render() {
    const { countries } = this.state;

    return (
      <>
        <div className="page__content darker">
          <div className="actions">
            <div className="container">
              <form className="filters">
                <div className="search">
                  <button>
                    <i className="icon ion-md-search"></i>
                  </button>
                  <input type="text" placeholder="Search for a country..." />
                </div>

                <div className="region__filter">
                  <select name="" id="">
                    <option selected disabled>
                      Filter by Region
                    </option>
                    <option value="">Africa</option>
                    <option value="">America</option>
                    <option value="">Asia</option>
                    <option value="">Europe</option>
                    <option value="">Oceania</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="countries">
            <div className="container">
              <div className="countries__list">
                {countries.map(country => (
                  <div key={country.alpha3Code} className="country__block">
                    <figure className="country__flag">
                      <Link
                        to={`/details/${country.name}`}
                        style={{ backgroundImage: "url(" + country.flag + ")" }}
                      ></Link>
                    </figure>
                    <div className="country__details">
                      <h2>{country.name}</h2>
                      <ul className="country__details-list">
                        <li>
                          <strong>Population: </strong>
                          {country.population}
                        </li>
                        <li>
                          <strong>Region: </strong>
                          {country.region}
                        </li>
                        <li>
                          <strong>Capital: </strong>
                          {country.capital}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
