import { Box, Stack } from "@chakra-ui/react";

import ListPanel from "./components/list-container/ListPanel";
import SidePanel from "./components/side-panels/SidePanel";

import "./App.css";
// import PdfViewer from "./assets/pdf_playground";

function App() {
  return (
    <Stack
      gap={0}
      direction={"row"}
      overflow={"hidden"}
      bg={"#f7d1a1"}
      height="100vh"
    >
      <Box position={"sticky"}>
        <SidePanel />
      </Box>
      <Box>
        <ListPanel />
      </Box>
      <Box flexDirection="row" overflowX={"auto"} width="100%">
        <Box width={"2000px"} h={"100px"} bg={"white"} />
        <Box width={"1000px"} h={"100px"} bg="red" />
      </Box>
    </Stack>
  );
}

export default App;
