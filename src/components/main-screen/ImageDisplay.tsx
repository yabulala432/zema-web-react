import { Box, Text } from "@chakra-ui/react";

import AudioPlayer from "./AudioPlayer";
import FlipImagesCard from "./flipping-images-card/FlipImagesCard";
import TitleContainer from "./TitleContainer";

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
      <TitleContainer />
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
