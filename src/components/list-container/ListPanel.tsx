import { Box } from "@chakra-ui/react";

interface Props {
  width: string | number;
  maxW: string | number;
}

function ListPanel({ width, maxW }: Props) {
  return (
    <Box
      style={{
        width: width ? width : "150px",
        maxWidth: maxW ? maxW : "200px",
        height: "100vh",
        backgroundColor: "red",
      }}
    >
      Hellow bro
    </Box>
  );
}

export default ListPanel;
