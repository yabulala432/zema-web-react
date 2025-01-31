import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

const ListItem = ({ title, active, onClick }: Props) => {
  return (
    <Box
      _hover={
        active
          ? {}
          : {
              backgroundColor: "#9d6651",
              cursor: "pointer",
              fontSize: "22px",
              fontWeight: 900,
            }
      }
      fontSize={active ? "22px" : "18px"}
      bgColor={active ? "#f7d1a1" : "transparent"}
      width="100%"
      paddingTop={active ? "6px" : "3px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={active ? "60px" : "50px"}
      overflowX="scroll"
      onClick={onClick}
    >
      <Text
        color={active ? "#9d6651" : "#fff"}
        fontWeight={active ? 900 : 600}
        transition={"0.5s"}
      >
        {title}
      </Text>
    </Box>
  );
};

export default ListItem;
