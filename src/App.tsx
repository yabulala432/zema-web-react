import { useEffect, useState } from "react";

import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

import dataStore from "./store/DataStore";

import ListPanel from "./components/list-container/ListPanel";
import AudioPlayer from "./components/main-screen/AudioPlayer";
import PDFViewer from "./components/main-screen/PDFViewer";
import TitleContainer from "./components/main-screen/TitleContainer";
import ZemaTitle from "./components/main-screen/ZemaTitle";
import SidePanel from "./components/side-panels/SidePanel";

import "./App.css";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const setExpandPanel = dataStore((state) => state.setExpandPanel);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1245) {
        setExpandPanel(false);
      }
      setIsSmallScreen(window.innerWidth > 1035);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isSmallScreen ? (
    <Stack
      gap={0}
      direction={"row"}
      overflow={"hidden"}
      bg={"#f7d1a1"}
      height="100vh"
    >
      <Box position={"sticky"}>
        <SidePanel />
      </Box>
      <Box>
        <ListPanel />
      </Box>
      <Box
        display={"flex"}
        alignSelf={"center"}
        justifyContent={"center"}
        w={"100%"}
        overflow={"auto"}
      >
        <VStack
          border="1px solid #f7d1a1"
          borderRadius="5px"
          boxShadow="10px 10px 20px #d6b08e, -10px -10px 20px #ffffff"
          justify={"center"}
          h={"100vh"}
          w={"730.281px"}
          position={"relative"}
        >
          <Box pos={"absolute"} top={0} h={"105px"}>
            <TitleContainer />
            <ZemaTitle />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={"10px"}
            h={"700px"}
          >
            <PDFViewer initialPageNumber={1} scale={1.0} width={500} />
          </Box>
          <Box pos={"absolute"} bottom={0} width={"500px"}>
            <AudioPlayer />
          </Box>
        </VStack>
      </Box>
    </Stack>
  ) : (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-b, #691c08, #f7d1a1)"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
    >
      <VStack
        spacing={6}
        p={8}
        boxShadow="lg"
        borderRadius="xl"
        bg="whiteAlpha.800"
        backdropFilter="blur(10px)"
        textAlign="center"
        maxW="sm"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#691c08">
          Enjoy the Full Experience on Mobile!
        </Text>
        <Text fontSize="md" color="#691c08">
          Download our mobile app for the best user experience and enhanced
          features.
        </Text>
        <Button
          leftIcon={<FaDownload />}
          colorScheme="red"
          bgColor="#691c08"
          color="#f7d1a1"
          _hover={{ bgColor: "#8a220b" }}
          size="lg"
          borderRadius="full"
        >
          Download App
        </Button>
      </VStack>
    </Box>
  );
}

export default App;
