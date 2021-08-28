import { Container, Text, Button } from "@chakra-ui/react"
import firebase from './../../config/firebaseClient'

export const Comandas = () => {
  const logout = () => {
    firebase.auth().signOut()
  }
  return (
    <>
      <Container>
        <Text>
          Comandas Component
        </Text>
        <Button onClick={logout}>Sair</Button>
      </Container>
    </>
  )
}