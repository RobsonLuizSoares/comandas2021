import { useEffect, useState } from "react"
import { Spinner, Center, Container } from "@chakra-ui/react"
import { Login, Comandas } from "./../components"
import firebase from "./../config/firebaseClient"


const Home = () => {
  const [auth, setAuth] = useState({
    loading: true,
    user: false
  })
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuth({
        loading: false,
        user
      })
    })
  }, [])

  if (auth.loading) {
    return (
      <Container mt='60px'>
        <Center>
          <Spinner />
        </Center>
      </Container>
    )
  }
  return (
    <>
      {auth.user ? <Comandas /> : <Login />}
    </>
  )
}

export default Home