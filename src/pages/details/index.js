import React, { Component } from "react";
import api from "../../services/api";
import { Link, Redirect } from "react-router-dom";

import "./styles.scss";

export default class Details extends Component {
  state = {
    details: {},
    border: {},
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  async componentDidMount() {
    this.loadDetails();
  }

  loadDetails = async () => {
    const { name } = this.props.match.params;

    let response;
    let state;

    if (name.length === 3) {
      response = await api.get(`/alpha/${name}`);
      state = { details: response.data, border: response.data.borders };      
    } else {
      response = await api.get(`/name/${name}`);
      state = { details: response.data[0], border: response.data[0].borders };
    } 

    this.setState(state);

    console.log(this.state);
    
  };

  render() {
    const { details } = this.state;

    return (
      <>
        <div className="page__content">
          <div className="details__info">
            <div className="container">
              <div className="back__button">
                <Link to="/">
                  {" "}
                  <i className="icon ion-md-arrow-back"></i> Back
                </Link>
              </div>
              <div className="details__box">
                <div className="details__flag">
                  <figure
                    className="country__flag"
                    style={{ backgroundImage: "url(" + details.flag + ")" }}
                  ></figure>
                </div>
                <div className="details__infos">
                  <h2>{details.name}</h2>
                  <ul>
                    <li>
                      <strong>Native Name: </strong>
                      {details.nativeName}
                    </li>

                    <li>
                      <strong>Population: </strong>
                      {details.population}
                    </li>

                    <li>
                      <strong>Region: </strong>
                      {details.region}
                    </li>

                    <li>
                      <strong>Sub Region: </strong>
                      {details.subregion}
                    </li>

                    <li>
                      <strong>Capital: </strong>
                      {details.capital}
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <strong>Top Level Domain: </strong>
                      {details.topLevelDomain}
                    </li>

                    <li>
                      <strong>Currencies: </strong>
                      {details.currencies &&
                        details.currencies
                          .map(currency => <>{currency.name}</>)
                          .reduce((prev, curr) => [prev, ", ", curr])}
                    </li>

                    <li>
                      <strong>Languages: </strong>
                      {details.languages &&
                        details.languages
                          .map(language => <>{language.name}</>)
                          .reduce((prev, curr) => [prev, ", ", curr])}
                    </li>
                  </ul>

                  <ul className="border__countries">
                    <span>Border Countries:</span>
                    {details.borders &&
                      details.borders.map(border => (
                        <li>
                          <Link to={`/details/${border}`}>{border}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
