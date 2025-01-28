import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";
import ListItem from "./ListItem";

function ListPanel() {
  const selectedData = dataStore((s) => s.selectedData);
  const setZemaTitle = dataStore((s) => s.setZemaTitle);
  const setSong = dataStore((s) => s.setSong);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    setActive(-1);
  }, [selectedData]);

  return (
    <Box
      style={{
        width: "300px",
        overflow: "hidden",
        height: "100vh",
        borderTopRightRadius: 20,
        backgroundColor: "#691c08",
        flexDirection: "column",
        justifyContent: "center",
        opacity: selectedData?.length ? 1 : 0,
        transform:
          selectedData?.length > 0 ? "translateX(0px)" : "translateX(-200px)",
        transition: "opacity 1.3s ease-in-out, transform 1.5s ease-in-out",
      }}
      visibility={selectedData?.length > 0 ? "visible" : "hidden"}
    >
      <Box
        style={{
          height: "95%",
          overflow: "scroll",
        }}
      >
        {selectedData.map((data, index) => {
          return (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 0,
              }}
              key={index}
            >
              <ListItem
                title={data.split("-*-")[0]}
                active={active === index}
                onClick={() => {
                  setActive(index);
                  setZemaTitle(data);
                  setSong(data.split("-*-")[1]);
                }}
              />
              <hr
                style={{
                  width: "80%",
                  alignSelf: "flex-end",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ListPanel;
