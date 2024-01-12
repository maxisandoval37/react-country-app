import React, {useState, useEffect} from 'react';
import { ChakraProvider, Center, Spinner, Box, Text, Flex } from '@chakra-ui/react';
import CountryInfo from './components/CountryInfo';
import {fetchCountryData} from './api/api'
import { useParams } from 'react-router-dom';

function App() {

  const [country, setCountry] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  const { countryName } = useParams();

  useEffect (() => {
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
      <Center minHeight="100vh" backgroundColor="f5f5f5f5">
        <Box p={6} boxShadow="md" borderRadius="md" backgroundColor="white" maxW="lg" width="100%">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Información del pais
          </Text>

          {loading && <Center mt={4}> <Spinner size="xl"/></Center>}

          {error && (
              <Flex direction="column" align="center" mt={4}>
                  <Text color="red.500" mb={2}>{error}</Text>
                  <Text fontSize="sm">Por favor, intentalo mas tarde...</Text>
              </Flex>
            )}

            {country && (
              <CountryInfo country={country}></CountryInfo>
            )}

        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;