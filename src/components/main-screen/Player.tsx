// import React from "react";
import ReactPlayer from "react-player";

const Player = () => {
  // Optional: Add a loading indicator while audio is loading
  // const [isLoading, setIsLoading] = React.useState(true);
  // React.useEffect(() => {
  //   //     setIsLoading(true);
  //   setTimeout(() => setIsLoading(false), 1000); // Simulate loading time
  // }, []);

  return (
    <div>
      <ReactPlayer
        url="https://www.ethiopianorthodox.org/amharic/yeqolotbet/gitsawe/01%20wetebarek.wma"
        controls={true}
        width="100%"
        height="50px"
        config={{
          file: {
            forceAudio: true,
            attributes: {
              controls: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Player;
