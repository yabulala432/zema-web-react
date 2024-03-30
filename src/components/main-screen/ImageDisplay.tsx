import { Box, Image, Text } from "@chakra-ui/react";

import AudioPlayer from "./AudioPlayer";

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
        <Box
          bgColor={"white"}
          width={{
            base: "250px",
            md: "250px",
            lg: "300px",
          }}
          height={{
            base: "250px",
            md: "250px",
            lg: "300px",
          }}
          borderRadius={"10px"}
          overflow={"hidden"}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            src="https://via.placeholder.com/300"
            alt="placeholder"
          />
        </Box>

        <Box
          width={{
            base: "250px",
            md: "250px",
            lg: "300px",
          }}
          height={{
            base: "250px",
            md: "250px",
            lg: "300px",
          }}
          borderRadius={"10px"}
          overflow={"hidden"}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            src="https://via.placeholder.com/300"
            alt="placeholder"
          />
        </Box>
      </Box>

      <Box bg={"tomato"} width={"50%"}>
        <AudioPlayer
          src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"}
        />
      </Box>
    </Box>
  );
}

export default ImageDisplay;
