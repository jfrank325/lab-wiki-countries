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

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        {' '}
        <Link className="navbar-brand" to="/countryDetail/:id">
          WikiCountries
        </Link>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              <Link className="list-group-item list-group-item-action" to="/ABW">
                <span role="img"> 🇦🇼 Aruba </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/AFG">
                <span role="img"> 🇦🇫 Afghanistan </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/AGO">
                <span role="img"> 🇦🇴 Angola </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/AIA">
                <span role="img"> 🇦🇮 Anguilla </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ALA">
                <span role="img"> 🇦🇽 Åland Islands </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ALB">
                <span role="img"> 🇦🇱 Albania </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/AND">
                <span role="img"> 🇦🇩 Andorra </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ARE">
                <span role="img"> 🇦🇪 United Arab Emirates </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ARG">
                <span role="img"> 🇦🇷 Argentina </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ARM">
                <span role="img"> 🇦🇲 Armenia </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ASM">
                <span role="img"> 🇦🇸 American Samoa </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ATA">
                <span role="img"> 🇦🇶 Antarctica </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/FLK">
                <span role="img"> 🇫🇰 Falkland Islands </span>
              </Link>
              <Link className="list-group-item list-group-item-action active" to="/FRA">
                <span role="img"> 🇫🇷 France </span>
              </Link>
              <Link className="list-group-item list-group-item-action" to="/ZWE">
                <span role="img"> 🇿🇼 Zimbabwe </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Route exact path="/:cca3" component={CountryDetail} />
    </div>
  );
};

export default App;
