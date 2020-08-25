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

function SignIn() {
  return (
    <Center bg="#553C9A" h="100vh">
      <Flex
        bg="#fff"
        w="380px"
        h="400px"
        boxShadow="0px 0px 15px -2px #1c1c1c"
        borderRadius="10px"
        margin="0 10px"
        padding="10px"
        direction="column"
      >
        VUTTR
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input border="gray.200" focusBorderColor="purple.700" type="email" />
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
      </Flex>
    </Center>
  );
}

export default SignIn;
