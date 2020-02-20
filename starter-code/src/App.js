import React from 'react';
import { Link, Route } from 'react-router-dom';
import countryData from './countries.json';

const CountryDetail = props => {
  const { cca3 } = props.match.params;
  console.log(cca3);
  const foundCountry = countryData.find(country => country.cca3 === cca3);

  console.log(foundCountry);

  const allLinks = foundCountry.borders.map(borderedCountry => {
    console.log(borderedCountry);

    const foundBordering = countryData.find(country => country.cca3 === borderedCountry);

    return (
      <li key={borderedCountry}>
        <Link to={borderedCountry}>{foundBordering.name.common}</Link>
      </li>
    );
  });

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{allLinks}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const CountryList = () => {
  return countryData.map(country => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              <Link key={country.cca3} className="list-group-item list-group-item-action" to={country.cca3}>
                <span role="img">
                  {country.flag} {country.name.common}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
const App = props => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <Link className="navbar-brand" to="/countryDetail/:id">
          WikiCountries
        </Link>
      </nav>
      <CountryList></CountryList>
      <Route exact path="/countryDetail/:cca3" component={CountryDetail} />
      <Route exact path="/" component={CountryList} />
    </div>
  );
};

export default App;
