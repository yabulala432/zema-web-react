import { useEffect, useState } from "react";

import { Box, VStack } from "@chakra-ui/react";
import axios from "axios";

import dataStore from "../../store/DataStore";

import PanelList from "./PanelList";
import SpinningHamburgerMenu from "./SpiningMenu";

interface Data {
  title: string;
  name: string;
  imageUrl: string;
  subTitle: string;
  data: string[];
}

const SidePanel = () => {
  const [shouldSpin, setShouldSpin] = useState(false);
  const [expandPanel, setExpandPanel] = useState(true);
  const [active, setActive] = useState(-1);

  // const [data, setData] = useState<Data[] | any>([]);
  const { data, setData, setSelectedData } = dataStore();

  useEffect(() => {
    axios.get<Data[]>("http://localhost:3001/data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <VStack
      style={{
        height: "100vh",
        width: expandPanel ? "300px" : "110px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        transition: "width 1.5s",
        gap: 0,
        backgroundColor: "#9d6651",
      }}
    >
      <Box
        style={{
          minHeight: expandPanel ? "300px" : "200px",
          width: "100%",
          display: "flex",
          position: "relative",
          transition: "all 1.5s",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "10px",
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
            width: "100%",
            height: expandPanel ? "300px" : "110px",
            backgroundColor: "#f7d1a1",
            borderRadius: "50%",
            alignSelf: "flex-end",
            transition: "1.5s",
          }}
        />
      </Box>
      <Box
        style={{
          backgroundColor: "#f7d1a1",
          fontSize: 20,
          overflowX: "hidden",
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          // paddingRight: "10px",
          width: "100%",
          flex: 1,
          // borderTopLeftRadius: "20px",
          // borderTopRightRadius: "20px",
        }}
      >
        <VStack
          style={{
            overflowX: "hidden",
            overflowY: "scroll",
            // rowGap: "10px",
            gap: 0,
          }}
        >
          {data?.map((item: Data, index: number) => (
            <PanelList
              onClick={() => {
                if (active != index) {
                  setActive(index);
                }
                setSelectedData(item.data);
              }}
              active={active === index}
              style={{
                transition: "all .5s ease-in-out",
              }}
              title={item.title}
              key={index}
              image={item.imageUrl}
              visibleTitle={expandPanel}
            />
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

// rgb of #fed7a5 =
export default SidePanel;
