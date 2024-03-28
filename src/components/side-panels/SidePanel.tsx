import React, { useState } from "react";

import { Box, VStack } from "@chakra-ui/react";
import PanelList from "./PanelList";

import SpinningHamburgerMenu from "./SpiningMenu";

interface Props {
  style?: React.CSSProperties;
}
const titles = [
  { title: "ABC", image: "https://via.placeholder.com/150" },
  { title: "DEF", image: "https://via.placeholder.com/150" },
  { title: "GHI", image: "https://via.placeholder.com/150" },
  { title: "JKL", image: "https://via.placeholder.com/150" },
  { title: "MNO", image: "https://via.placeholder.com/150" },
  { title: "PQR", image: "https://via.placeholder.com/150" },
  { title: "STU", image: "https://via.placeholder.com/150" },
  { title: "VWX", image: "https://via.placeholder.com/150" },
  { title: "YZA", image: "https://via.placeholder.com/150" },
];

const SidePanel = ({ style }: Props) => {
  const [shouldSpin, setShouldSpin] = useState(false);
  const [expandPanel, setExpandPanel] = useState(true);

  return (
    <VStack
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: expandPanel ? "300px" : "110px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        transition: "width 1.5s",
        gap: 0,
        backgroundColor: "white",
      }}
    >
      <Box
        style={{
          height: "222px",
          width: "100%",
          display: "flex",
          padding: "10px",
          justifyContent: "flex-end",
          backgroundColor: "tomato",
          // backgroundColor: "transparent",
        }}
      >
        <SpinningHamburgerMenu
          size={40}
          color="white"
          should_spin_forward={shouldSpin}
          onClick={() => {
            setShouldSpin(expandPanel);
            setExpandPanel(!expandPanel);
          }}
        />
      </Box>
      <Box
        style={{
          alignSelf: "flex-start",
          // backgroundColor: "#444",
          fontSize: 20,
          overflowX: "hidden",
          paddingLeft: "20px",
          paddingTop: "10px",
          paddingRight: "10px",
          width: "100%",
        }}
      >
        <VStack
          style={{
            overflowX: "hidden",
            overflowY: "scroll",
            rowGap: "10px",
            alignItems: "flex-start",
          }}
        >
          {titles.map((item, index) => (
            <PanelList
              title={item.title}
              key={index}
              image={item.image}
              visibleTitle={expandPanel}
            />
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default SidePanel;
