import React from "react";
import {
  Flex,
  Text,
  Center,
  InputLeftElement,
  Input,
  InputGroup,
} from "@chakra-ui/core";
import { FiSearch } from "react-icons/fi";

function Home() {
  return (
    <>
      <Flex
        bg="white"
        boxShadow="0px 5px 10px -5px #9e9e9e"
        w="100%"
        h="50px"
        fontFamily="Roboto"
        pb="10px"
      >
        <Text>VUTTR</Text>
      </Flex>
      <Flex bg="purple.700" direction="column" minH="100%" grow="1">
        <Center>
          <InputGroup w="300px" h="40px">
            <InputLeftElement
              padding="2px 0 0 0"
              children={<FiSearch color="#718096" />}
            />
            <Input type="phone" placeholder="Search" />
          </InputGroup>
        </Center>
      </Flex>
    </>
  );
}

export default Home;
