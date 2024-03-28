import { Box, Text } from "@chakra-ui/react";
import dataStore from "../../store/DataStore";

function ListPanel() {
  const selectedData = dataStore((s) => s.selectedData);
  return (
    <Box
      style={{
        width: "200px",
        height: "100vh",
        paddingTop: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#9d6651",
        // display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      <Box>
        {selectedData.map((data, index) => {
          return (
            <Box
              style={{
                backgroundColor: "#f7d1a1",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                margin: 10,
              }}
              key={index}
              p={5}
            >
              <Text fontWeight={700} color="#9d6651">
                {data}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ListPanel;
