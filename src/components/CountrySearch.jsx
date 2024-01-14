import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Center, Input, Button} from '@chakra-ui/react';

const CountrySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/App/${searchTerm}`);
    };

    return (
        <Box>
            <Center minHeight="100vh" backgroundColor="f5f5f5">
                <Box p={6} boxShadow="md" borderRadius="md" backgroundColor="white" maxW="lg" width="100%">
                    <Input
                     placeholder="Ingrese el nombre del país" 
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     mb={4}
                    />

                    <Button colorScheme="blue" onClick={handleSearch}>
                        Buscar
                    </Button>
                </Box>
            </Center>
        </Box>
    )
};

export default CountrySearch;