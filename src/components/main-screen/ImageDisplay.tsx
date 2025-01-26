import { Box, HStack } from "@chakra-ui/react";

import Player from "./Player";
import FlipImagesCard from "./flipping-images-card/FlipImagesCard";
import TitleContainer from "./TitleContainer";

function ImageDisplay() {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: "20px",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    ></Box>
  );
}

export default ImageDisplay;
