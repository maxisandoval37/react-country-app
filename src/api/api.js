import axios from 'axios';

const fetchCountryData = async (countryName) => {
    try {
      let response = await axios.get(`https://countries-api-rest.onrender.com/contriesapi/obtenerPais?nombre=${countryName}`);
      return (response.data);
    }
    catch (error) {
      console.error('Error al obtener la info del pais');
      throw new Error('Error al obtener la información del pais');
    }
};

export { fetchCountryData };