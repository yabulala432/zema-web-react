import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  image: string;
  visibleTitle: boolean;
}

const PanelList = ({ title, image, visibleTitle }: Props) => {
  return (
    <Flex
      style={{
        width: "95%",
        borderRadius: "15px",
        padding: "3px",
      }}
      _hover={{
        backgroundColor: "gray.200",
        cursor: "pointer",
      }}
      alignItems="center"
    >
      <Image boxSize="70px" borderRadius="30%" src={image} alt={title} />
      {visibleTitle && (
        <Box ml="4">
          <Text fontWeight="bold">{title}</Text>
        </Box>
      )}
    </Flex>
  );
};

export default PanelList;
