import { Box } from "@chakra-ui/react";

function ListItem() {
  return (
    <Box
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(157, 102, 81,.4)",
        borderRadius: "15px",
        marginBottom: "10px",
      }}
    >
      <Box
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      ></Box>
    </Box>
  );
}

export default ListItem;
