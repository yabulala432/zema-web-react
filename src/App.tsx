import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import SidePanel from "./components/side-panels/SidePanel";

function App() {
  const [isLeftBoxExpanded, setIsLeftBoxExpanded] = useState(true);

  const toggleLeftBoxWidth = () => {
    setIsLeftBoxExpanded(!isLeftBoxExpanded);
  };

  return (
    <Box display="flex" height="100vh">
      <Box
        width={isLeftBoxExpanded ? "200px" : "100px"}
        height="100vh"
        backgroundColor="blue.500"
      >
        {/* Content for the left box */}
        <Button onClick={toggleLeftBoxWidth}>Width</Button>
        {/* <SidePanel
          style={{
            width: "100%",
            backgroundColor: "blue.500",
          }}
        /> */}
      </Box>

      <Box width="200px" height="100vh" backgroundColor="red.500">
        {/* Content for the right box */}
        Hello
      </Box>
    </Box>
  );
}

export default App;
