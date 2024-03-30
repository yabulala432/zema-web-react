import { Box, Text } from "@chakra-ui/react";

import AudioPlayer from "./AudioPlayer";
import FlipImagesCard from "./FlipImagesCard";

function ImageDisplay() {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: "20px",
        flexDirection: "column",
      }}
    >
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
          Title
        </Text>
      </Box>
      <Box display={"flex"} flexDir={"row"} gap={5}>
        <FlipImagesCard />
      </Box>

      <Box width={"50%"}>
        <AudioPlayer />
      </Box>
    </Box>
  );
}

export default ImageDisplay;
