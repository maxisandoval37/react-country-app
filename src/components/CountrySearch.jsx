import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Center, Input, Button, FormControl, FormErrorMessage, Text } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

const CountrySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setError('El nombre del país no puede estar vacio!');
        } else if (searchTerm.length > 30) {
            setError('El nombre del país no puede tener más de 30 caracteres!');
        } else {
            navigate(`/App/${searchTerm}`);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setError('');
    };

    return (
        <Box>
            <Center minHeight="100vh" backgroundColor="f5f5f5">
                <Box p={6} boxShadow="md" borderRadius="md" backgroundColor="white" maxW="lg" width="100%">
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>
                        Bienvenido! 👋
                    </Text>
                    <FormControl isInvalid={error !== ''}>
                        <Input
                            placeholder="Ingrese el nombre del país"
                            value={searchTerm}
                            onChange={handleChange}
                            mb={4}
                        />
                        <FormErrorMessage mb={4}>{error}</FormErrorMessage>
                    </FormControl>
                    <Button colorScheme="blue" onClick={handleSearch} leftIcon={<LuSearch />}>
                        Buscar
                    </Button>
                </Box>
            </Center>
        </Box>
    );
};

export default CountrySearch;