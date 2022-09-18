import { IconButton } from '@chakra-ui/button';
import nav from './navbar.css';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Stack className="na"
            p={5}
            bg={'#00063b'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='#00ff43' style={{ fontFamily: "Pacifico", backgroundcolor: "#6B46C0",}}>Resumemk</Heading>
                <Spacer></Spacer>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Text as='a' href='#' fontSize='lg' color='#00ff43'>Home</Text>
                    <Button colorScheme={'#00ff43'} fontWeight={'medium'} color='#00ff43'>Contact</Button>
                </HStack>
            </Flex>

        </Stack>
    )
}

export default Navbar
