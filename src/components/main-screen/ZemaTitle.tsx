import { Text } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";

function ZemaTitle() {
  const zemaTtile = dataStore((state) => state.zemaTitle);
  return (
    <Text fontSize={"20px"} color={"#9d6651"} fontWeight={"bold"}>
      {zemaTtile}
    </Text>
  );
}
export default ZemaTitle;
