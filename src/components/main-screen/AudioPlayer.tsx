import {
  Box,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import dataStore from "../../store/DataStore";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { song } = dataStore();
  // console.log({ song });

  const playSong = async () => {
    audioRef.current?.load();
    const playPromise = audioRef.current?.play();
    if (playPromise !== undefined) {
      // console.log("playPromise", playPromise);
      playPromise
        .then((_) => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
          // console.error("Error during playback: man !", error);
        });
    }
  };

  useEffect(() => {
    if (audioRef.current && song) {
      playSong();
    }
  }, [song]);

  const handlePlay = () => {
    if (audioRef.current && song) {
      if (!isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.currentTime === audioRef.current.duration) {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir={"row"}
      borderRadius="full"
      boxShadow="10px 10px 20px #d6b08e, -10px -10px 20px #ffffff"
      // boxShadow="10px 10px 20px #fff, -10px -10px 20px #d6b08e"
      padding="5px"
      // hover
      // _hover={{
      //   boxShadow: "inset 10px 10px 20px #fff, inset -10px -10px 20px #d6b08e",
      // }}
      _hover={{
        boxShadow: "10px 10px 20px #691c08, -10px -10px 15px #ffffff", // Softer shadow on hover
      }}
      // transition="all 2.5s"
      transition="all .5s ease-in-out"
    >
      <audio
        ref={audioRef}
        src={song}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
      />
      <IconButton
        w={"70px"}
        h={"70px"}
        aria-label={isPlaying ? "Pause" : "Play"}
        icon={isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        onClick={handlePlay}
        borderRadius={"50%"}
        bgColor={"#691c08"}
        color={"#fff"}
        _hover={{
          bgColor: "#691c08",
          opacity: 0.8,
        }}
      />

      <Box
        style={{
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "#691c08",
            fontWeight: "bold",
          }}
        >
          {formatTime(currentTime)}
        </Text>

        <Box
          style={{
            width: "70%",
          }}
        >
          <Slider
            flex="1"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
          >
            <SliderTrack
              style={{
                backgroundColor: "#fff",
                height: "5px",
                borderRadius: "5px",
              }}
            >
              <SliderFilledTrack
                style={{
                  backgroundColor: "#691c08",
                }}
              />
            </SliderTrack>
            <SliderThumb
              style={{
                height: "20px",
                width: "10px",
                backgroundColor: "#691c08",
              }}
            />
          </Slider>
        </Box>

        <Text
          style={{
            fontWeight: "bold",
            color: "#691c08",
          }}
        >
          {formatTime(duration)}
        </Text>
      </Box>
    </Box>
  );
};

export default AudioPlayer;

// import { Box, Stack } from "@chakra-ui/react";
// import dataStore from "../../store/DataStore";

// function AudioPlayer() {
//   const song = dataStore((d) => d.song);
//   console.log({ song }, "AudioPlayer");
//   return (
//     <Stack>
//       <Box
//         borderRadius="5px"
//         boxShadow="10px 10px 20px #d6b08e, -10px -10px 20px #ffffff"
//         justifyContent={"center"}
//         // h={"100vh"}
//         // w={"730.281px"}
//         // position={"relative"}
//       >
//         {/* <Box pos={"absolute"} top={0} h={"105px"}>
//           <TitleContainer />
//           <ZemaTitle />
//         </Box> */}
//         {/* <Box
//           display={"flex"}
//           alignItems={"center"}
//           justifyContent={"center"}
//           padding={"10px"}
//           h={"700px"}
//         >
//           <PDFViewer initialPageNumber={1} scale={1.0} width={500} />
//         </Box> */}
//         <Box>
//           <audio controls>
//             <source src={song} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </Box>
//       </Box>
//     </Stack>
//   );
// }

// export default AudioPlayer;
