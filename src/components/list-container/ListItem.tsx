import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  active: boolean;
  style?: React.CSSProperties;
  onClick: () => void;
}

const ListItem = ({ title, style, active, onClick }: Props) => {
  return (
    <Flex
      _hover={{
        backgroundColor: active ? "none" : "rgba(247, 209, 161,.4)",
        cursor: "pointer",
        color: "#f7d1a1",
      }}
      bgColor={active ? "#f7d1a1" : "transparent"}
      style={{
        width: "100%",
        padding: active ? "6px" : "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: active ? "60px" : "50px",
        ...style,
      }}
      onClick={onClick}
    >
      <Text
        color={active ? "#9d6651" : "#fff"}
        fontSize={active ? "22px" : "18px"}
        fontWeight={active ? 900 : 600}
        style={{
          transition: ".5s",
        }}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default ListItem;
