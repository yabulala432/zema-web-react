import { Box } from "@chakra-ui/react";

import AudioPlayer from "./AudioPlayer";
import FlipImagesCard from "./flipping-images-card/FlipImagesCard";
import TitleContainer from "./TitleContainer";

function ImageDisplay() {
  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "20px",
        flexDirection: "column",
      }}
    >
      <TitleContainer />
      <FlipImagesCard />
      <Box width={500}>
        <AudioPlayer />
      </Box>
    </Box>
  );
}

export default ImageDisplay;
