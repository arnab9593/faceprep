import { Box, Text } from "@chakra-ui/layout";
import { Button, Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value)

  const isError = username === ''
  const passErr = password === ''

  const submitForm = () => {
    if (username === "foo" && password === "bar") {
      alert("Login sucessful");
      return <Navigate to="/home"></Navigate>
    } else {
      alert("wrong credentials")
    }
  }

  return (
    <Card w={500} m="auto auto" p={10}>
      <Text fontSize={70}>Login</Text>
      <FormControl isInvalid={isError || passErr} w={420} >
        <FormLabel>Username</FormLabel>
        <Input type='name' value={username} onChange={handleUsername} />
        {isError ? (
          <FormErrorMessage>Username is required.</FormErrorMessage>
        ) : (
          <FormErrorMessage></FormErrorMessage>
        )}
        <FormLabel>Password</FormLabel>
        <Input type='password' value={password} onChange={handlePassword} />
        {passErr ? (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        ) : (
          <FormErrorMessage></FormErrorMessage>
        )}
      </FormControl>
      <Button onClick={submitForm}>Submit</Button>
    </Card>
  )
};

export default Login;
