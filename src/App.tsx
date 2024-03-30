import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import ListPanel from "./components/list-container/ListPanel";
import ImageDisplay from "./components/main-screen/ImageDisplay";
import SidePanel from "./components/side-panels/SidePanel";

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
