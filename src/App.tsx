import React from "react";
import { ChakraProvider } from "@chakra-ui/core";

import Routes from "./routes";
import customTheme from "./style";

function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Routes />
    </ChakraProvider>
  );
}
export default App;
