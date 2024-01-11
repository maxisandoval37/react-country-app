import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryInfo from './components/CountryInfo';

function App() {

  const [country, setCountry] = useState(null);

  useEffect (() => {
    const fetchCountryData = async () => {
    try {
      let response = await axios.get('https://countries-api-rest.onrender.com/contriesapi/obtenerPais?nombre=argentina');
      setCountry(response.data);
    }
    catch (error) {
      console.error('Error al obtener la info del pais');
    }
  };
      fetchCountryData();
  },[]);

  return (
    <div className="App">
        {country ? <CountryInfo country={country}/> : <p>Cargando...</p>}
    </div>
  );
}

export default App;
