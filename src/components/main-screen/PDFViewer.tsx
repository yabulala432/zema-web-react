import { Box } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";

const PDFViewer = () => {
  const pdf = dataStore((s) => s.pdf);

  return (
    <Box
      border="1px solid #f7d1a1"
      borderRadius="5px"
      boxShadow="10px 10px 20px #d6b08e, -10px -10px 20px #ffffff"
      display="flex"
      padding="5px"
      flexDirection="column"
      _hover={{
        boxShadow: "10px 10px 20px #691c08, -10px -10px 15px #ffffff", // Softer shadow on hover
      }}
      transition="box-shadow 0.5s"
      width={"550px"}
      height={"700px"}
      overflow={"scroll"}
    >
      <iframe src={pdf} width="100%" height="700px"></iframe>
    </Box>
  );
};
export default PDFViewer;
