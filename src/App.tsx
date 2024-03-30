import { Box, Flex } from "@chakra-ui/react";

import ListPanel from "./components/list-container/ListPanel";
import ImageDisplay from "./components/main-screen/ImageDisplay";
import SidePanel from "./components/side-panels/SidePanel";

import "./App.css";

function App() {
  return (
    <Flex bg={"#f7d1a1"}>
      <Box>
        <SidePanel />
      </Box>
      <Box>
        <ListPanel />
      </Box>
      <Box width={"100%"}>
        <ImageDisplay />
      </Box>
    </Flex>
  );
}

export default App;
