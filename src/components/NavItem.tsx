import {
  Flex,
  Text,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import DataFetch from "../services/sampleDataFetching";
import { data } from "./Fetch";

type NavItemProps = {
  icon: IconType;
  title: string;
  navSize: string;
  onSelect: (title: string) => void;
  isActive?: boolean;
};

export default function NavItem({
  icon,
  title,
  isActive,
  navSize,
  onSelect,
}: NavItemProps) {
  const [lists, setLists] = useState<data[]>([]);
  useEffect(() => {
    DataFetch.get()?.then((res) => {
      setLists(res.data);
    })
  },[])
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
      onClick={() => onSelect(title)}
    >
      <Popover placement="right">
        <PopoverTrigger>
          <Link
            backgroundColor={isActive ? "#AEC8CA" : ""}
            p={1}
            borderRadius={8}
            _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
            width={navSize == "large" ? "100%" : ""}
          >
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={isActive ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          w="250px"
          color="white"
          bg="#82AAAD"
          borderColor="#82AAAD"
          borderRadius="50px"
          overflowY="auto"
        >
          <PopoverBody borderRadius={"50%"}>
            <NavHoverBox
              lists={lists}
              title={title}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
