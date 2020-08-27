import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  Center,
  FormHelperText,
} from "@chakra-ui/core";

function SignUp() {
  return (
    <Center bg="#553C9A" h="100vh">
      <Flex
        bg="#fff"
        w="80%"
        h="100%"
        margin="0 10px"
        padding="20px 100px"
        direction="column"
        fontSize="40px"
        alignItems="center"
        fontWeight="bold"
      >
        VUTTR
        <FormControl
          display="flex"
          flexDirection="column"
          padding="5px"
          id="email"
          w="50%"
        >
          <FormLabel>Nome</FormLabel>
          <Input
            marginBottom="10px"
            border="1px solid gray"
            focusBorderColor="purple.300"
            type="name"
          />
          <FormLabel>Email</FormLabel>
          <Input
            marginBottom="10px"
            border="1px solid gray"
            focusBorderColor="purple.300"
            type="email"
          />
          <FormLabel>Senha</FormLabel>
          <Input
            border="1px solid gray"
            focusBorderColor="purple.300"
            type="password"
          />
          <Button marginTop="30px" w="30%" colorScheme="yellow">
            {" "}
            Submit
          </Button>
        </FormControl>
      </Flex>
    </Center>
  );
}

export default SignUp;
