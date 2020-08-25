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
        h="380px"
        boxShadow="0px 0px 15px -2px #1c1c1c"
        borderRadius="10px"
        margin="0 10px"
        padding="20px"
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
        >
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
          <Button marginTop="30px" w="100%" colorScheme="yellow">
            {" "}
            texe
          </Button>
        </FormControl>
      </Flex>
    </Center>
  );
}

export default SignIn;
