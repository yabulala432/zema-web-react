import { Text } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";

function ZemaTitle() {
  const zemaTtile = dataStore((state) => state.zemaTitle);
  return (
    <Text
      textAlign={"center"}
      fontSize={"3xl"}
      color={"#691c08"}
      fontWeight={"bold"}
      userSelect={"text"}
    >
      {zemaTtile.replace(/_/g, " ").split("-*-")[0]}
    </Text>
  );
}
export default ZemaTitle;
