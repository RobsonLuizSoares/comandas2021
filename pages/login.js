import firebase, { persistenceMode } from './../config/firebaseClient'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Link from 'next/link'
import {
  Box,
  Container,
  Text,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
} from "@chakra-ui/react";


const validationSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Preencha seu email'),
  password: yup.string().required('Preencha sua senha')
})

export default function Login() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting
  } = useFormik({
    onSubmit: async (values) => {
      firebase.auth().setPersistence(persistenceMode)
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        console.log(user.user)
      } catch (error) {
        console.log(error)
      }
    },
    validationSchema,
    initialValues: {
      email: '',
      password: ''
    }
  })

  return (
    <>
      <Container p={5} mx='auto' maxW='container.lg'>
        <Center>
          <Box mx='auto'>
            <Text fontSize='4xl' textColor='red.600'>
              Liberty App
            </Text>
            <Text fontSize='2xl' textAlign='center' textColor='green'>
              Login
            </Text>
          </Box>
        </Center>

        <Container p={5}>
          <Box p={5}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && <FormHelperText textColor="tomato">{errors.email}</FormHelperText>}
            </FormControl>
          </Box>

          <Box p={5}>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && <FormHelperText textColor="tomato">{errors.password}</FormHelperText>}
            </FormControl>
          </Box>
          <Box p={5}>
            <Button
              w='100%'
              isLoading={isSubmitting}
              backgroundColor='twitter.200'
              onClick={handleSubmit}
            >Acessar o Sistema</Button>
          </Box>
        </Container>
        <Center>
          <Box backgroundColor='cyan' p={2} borderRadius={3}>
            <Link href='/signup'><a>Cadastrar no Sistema</a></Link>
          </Box>
        </Center>
      </Container>
    </>
  )
}