import React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
import Home from "./pages/Home";
import customTheme from "./style";

function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}
export default App;
