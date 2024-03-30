import React, { useState } from "react";
import {
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

type AudioPlayerProps = {
  src: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = React.createRef<HTMLAudioElement>();

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
    }
  };

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  return (
    <Box>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />

      <Button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</Button>

      <Slider
        min={0}
        max={audioRef.current?.duration || 0}
        value={currentTime}
        onChange={handleSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Text>{currentTime.toFixed(2)}</Text>
    </Box>
  );
};

export default AudioPlayer;
