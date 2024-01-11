import React from 'react';

const CountryInfo = ({ country }) => {
    console.log(country);

    return (
        <div>
            <h2>{country.nombre}</h2>
            <p>Capital: {country.capital}</p>
            <p>Moneda: {country.moneda}</p>
            <p>Población: {country.poblacion}</p>
            <img src={country.bandera} alt={`Bandera de ${country.nombre}`}/>

            <p>Lenguajes: {country.lenguajes.spa}</p>

            <p>
                Mapas:
                <br></br>
                <a href={country.mapas.googleMaps}>Google Maps</a>
            </p>
            
        </div>    
    );
};

export default CountryInfo;