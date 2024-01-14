import React, {useState, useEffect} from 'react';
import { ChakraProvider, Center, Spinner, Box, Text, Flex, Button } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai'; 
import CountryInfo from './components/CountryInfo';
import {fetchCountryData} from './api/api'
import { useParams } from 'react-router-dom';

function App() {

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { countryName } = useParams();//Capturamos el parametro de la url

  useEffect (() => { //Renderizar cambios provocados por la peticion de la api
    const fetchData = async () => {
      try {
        const data = await fetchCountryData(countryName);
        setCountry(data);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  },[countryName]);

  return (
    <ChakraProvider>
      <Center minHeight="100vh" backgroundColor="f5f5f5">
        <Box p={6} boxShadow="md" borderRadius="md" backgroundColor="white" maxW="lg" width="100%">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">
                Información del país
            </Text>
            {!loading && (
              <Button colorScheme="blue" onClick={() => window.location.href='/'} leftIcon={<AiOutlineHome />}>
                Inicio
              </Button>
            )}
          </Flex>

          {loading && <Center mt={4}> <Spinner size="xl"/></Center>}

          {error && (
              <Flex direction="column" align="center" mt={4}>
                  <Text color="red.500" mb={2}>{error}</Text>
                  <Text fontSize="sm">Por favor, inténtalo más tarde...</Text>
              </Flex>
            )}

            {country && (
              <CountryInfo country={country} />
            )}

        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;