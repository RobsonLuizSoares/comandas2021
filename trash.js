import Link from 'next/link'

import {
  Box,
  Container,
  Text,
  Center
} from "@chakra-ui/react";



export const Login = () => {

  return (
    <>
      <Container mt={12} p={12} mx='auto' maxW='container.lg' bg='gray.100'>
        <Center>
          <Text>Sistema de Gerenciamento de Produtos e Serviços</Text>
        </Center>
      </Container>
      <Container mt={12} p={12} justifyContent="space-between" maxW="container.sm" display='flex' backgroundColor='gray.100' >
        <Link href='/login'>
          <a>
            <Box p={6} backgroundColor='twitter.200'>
              Acessar o Sistema
            </Box>
          </a>
        </Link>
        <Link href='/signup'>
          <a>
            <Box p={6} backgroundColor='whatsapp.200'>Cadastrar no Sistema</Box>
          </a>
        </Link>
      </Container>

    </>
  )
}