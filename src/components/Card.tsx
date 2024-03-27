import { Text, Card } from "@chakra-ui/react";
import CardBackground from "../assets/img_1.png";

interface Props {
  title?: string;
  image?: string;
}

export const CardComponent = ({ title, image }: Props) => {
  return (
    <Card
      backgroundImage={CardBackground}
      width={"100%"}
      height={"500"}
      backgroundColor={"red"}
      bgRepeat={"no-repeat"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>{title}</Text>
    </Card>
  );
};
