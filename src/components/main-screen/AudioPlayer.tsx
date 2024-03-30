import {
  Box,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
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
        console.log("Song ended");
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
      gap={10}
      marginTop={"20px"}
      flexDir={"column"}
      alignItems="center"
      pos={"relative"}
    >
      <audio
        ref={audioRef}
        src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
      />
      <IconButton
        aria-label={isPlaying ? "Pause" : "Play"}
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={handlePlay}
        borderRadius={"50%"}
        color={"#9d6651"}
      />
      <Box
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
          bottom: "30px",
        }}
      >
        <Text
          style={{
            color: "#9d6651",
            fontWeight: "bold",
          }}
          marginRight="0.5rem"
        >
          {formatTime(currentTime)}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#9d6651",
          }}
          marginLeft="0.5rem"
        >
          {formatTime(duration)}
        </Text>
      </Box>
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
              height: "10px",
              borderRadius: "10px",
            }}
          >
            <SliderFilledTrack
              style={{
                backgroundColor: "#9d6651",
              }}
            />
          </SliderTrack>
          <SliderThumb
            style={{
              height: "20px",
              width: "20px",
              backgroundColor: "#9d6651",
            }}
          />
        </Slider>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
