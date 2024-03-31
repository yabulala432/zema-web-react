import { Box, Text } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";

function TitleContainer() {
  const title = dataStore((s) => s.title);

  return (
    <Box
      style={{
        paddingBottom: "5px",
      }}
    >
      <Text
        style={{
          color: "#9d6651",
          fontWeight: "bolder",
          fontSize: "30px",
        }}
      >
        {title}
      </Text>
    </Box>
  );
}

export default TitleContainer;
