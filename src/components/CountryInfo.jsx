import React from 'react';
import { Box, Heading, Text, Image, Link, Flex, VStack } from '@chakra-ui/react';

const CountryInfo = ({ country }) => {
  return (
    <Box>
      <Heading fontSize="2xl" mb={4}>{country.nombre.charAt(0).toUpperCase() + country.nombre.slice(1)}</Heading>

      <Flex align="center" mb={2}>
        <Text fontWeight="bold" mr={2}>Capital:</Text>
        <Text>{country.capital}</Text>
      </Flex>

      <Flex align="center" mb={2}>
        <Text fontWeight="bold" mr={2}>Moneda:</Text>
        <Text>{country.moneda}</Text>
      </Flex>

      <Flex align="center" mb={2}>
        <Text fontWeight="bold" mr={2}>Población:</Text>
        <Text>{country.poblacion}</Text>
      </Flex>

      <Image src={country.bandera} alt={`${country.nombre} Flag`} borderRadius="md" mb={4} />

      <Flex align="center" mb={2}>
        <Text fontWeight="bold" mr={2}>Lenguaje/s:</Text>
        <Text>{Object.values(country.lenguajes).join(', ')}</Text>
      </Flex>

      <VStack spacing={2} mb={4}>
        <Text fontWeight="bold">Mapas:</Text>
        <Link href={country.mapas.googleMaps} isExternal>
          Google Maps
        </Link>
        <Link href={country.mapas.openStreetMaps} isExternal>
          OpenStreetMaps
        </Link>

      </VStack>
    </Box>
  );
};

export default CountryInfo;