import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import nav from './navbar.css';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FcAssistant } from "react-icons/fc";

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('#00ff9d', '#00f7ff')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2022 Resumemaker. Designed By</Text>
                    <Text as={'a'} href={'https://www.linkedin.com/in/gaurav-verma-88056a224'} target={'_blank'} color={'blue.600'}>Gaurav verma</Text>
                </Stack>


                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/abcdeCoder'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.linkedin.com/in/gaurav-verma-88056a224'} target='_blank' colorScheme={'blue'}>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://abcdecoder.github.io/portfolio.github.io/'} target='_blank' colorScheme={'pink'}>
                        <FcAssistant />
                    </IconButton>

                </Stack>

            </Container>
        </Box>
    )
}

export default Footer
