import { Text } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";

function TitleContainer() {
  const title = dataStore((s) => s.title);

  return (
    <Text
      style={{
        color: "#691c08",
        fontWeight: "bold",
        fontSize: "40px",
        textAlign: "center",
      }}
    >
      {title}
    </Text>
  );
}

export default TitleContainer;
