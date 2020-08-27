import React from "react";
import {
  Flex,
  Text,
  List,
  ListItem,
  InputLeftElement,
  Input,
  InputGroup,
  Button,
  useDisclosure,
} from "@chakra-ui/core";
import { FiSearch } from "react-icons/fi";
import Modal from "../../components/NewModal";

function Home() {
  return (
    <>
      <Flex
        alignItems="center"
        bg="#F7FAFC"
        boxShadow="0px 5px 10px -5px #9e9e9e"
        w="100%"
        h="60px"
        fontFamily="Roboto"
        fontWeight="500"
        mb="1px"
        paddingLeft="5px"
        color="#553C9A"
      >
        <Text>VUTTR</Text>
      </Flex>
      <Flex
        bg="#F7FAFC"
        direction="column"
        minH="100%"
        grow={1}
        justifyContent="center"
        alignItems="center"
        paddingTop="20px"
      >
        <Flex
          bg="#F7FAFC"
          w="80%"
          grow={1}
          direction="column"
          alignItems="center"
        >
          <Flex w="80%" justifyContent="space-between">
            <InputGroup w="300px" h="40px" paddingRight="5px;">
              <InputLeftElement
                padding="2px 0 0 0"
                children={<FiSearch color="#718096" />}
              />
              <Input
                border="1px solid gray"
                focusBorderColor="purple.300"
                type="text"
                placeholder="Search"
              />
            </InputGroup>
            <Button colorScheme="yellow">Adicionar</Button>
          </Flex>

          <List spacing={3} w="80%" color="#fff" paddingTop="10px">
            <ListItem borderRadius="5px" bg="#9F7AEA">
              texe
            </ListItem>
            <ListItem borderRadius="5px" bg="#9F7AEA">
              texe
            </ListItem>
          </List>
        </Flex>
      </Flex>
      <Modal />
    </>
  );
}

export default Home;
