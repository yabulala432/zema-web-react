import { Box } from "@chakra-ui/react";
import SidePanel from "./components/side-panels/SidePanel";
import "./App.css";
import ListPanel from "./components/list-container/ListPanel";

function App() {
  return (
    <Box display="flex" bg={"#f7d1a1"} height="100vh">
      <SidePanel />
      <ListPanel />
    </Box>
  );
}

export default App;
