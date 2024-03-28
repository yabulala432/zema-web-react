import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  image: string;
  visibleTitle: boolean;
  active: boolean;
  style?: React.CSSProperties;
  onClick: () => void;
}

const PanelList = ({
  title,
  image,
  visibleTitle,
  style,
  active,
  onClick,
}: Props) => {
  return (
    <Flex
      _hover={{
        backgroundColor: active ? "none" : "rgba(157, 102, 81,.4)", //rgb of #9d6651 =
        cursor: "pointer",
        color: "#9d6651",
      }}
      bgColor={active ? "#9d6651" : "transparent"}
      style={{
        width: "100%",
        // borderRadius: "15px",
        padding: active ? "6px" : "3px",
        display: "flex",
        alignItems: "center",
        ...style,
      }}
      onClick={onClick}
    >
      <Image
        boxSize={active ? "73px" : "60px"}
        borderRadius="30%"
        style={{
          transition: ".5s",
        }}
        src={image}
        alt={title}
      />
      {visibleTitle && (
        <Box ml="4">
          <Text
            color={active ? "white" : "#9d6651"}
            fontSize={active ? "22px" : "18px"}
            fontWeight={active ? 900 : 600}
            style={{
              transition: ".5s",
            }}
          >
            {title}
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default PanelList;
