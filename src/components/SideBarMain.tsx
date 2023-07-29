import { useState } from "react";
import {
  Avatar,
  Flex,
  Text,
  Heading,
  IconButton,
  List,
} from "@chakra-ui/react";
import {
  FiActivity,
  FiBriefcase,
  FiHome,
  FiMenu,
  FiRadio,
  FiSettings,
} from "react-icons/fi";
import NavItem from "./NavItem";

function SidebarWithList() {
  const [navSize, setNavSize] = useState("large");
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleNavItemClick = (navItemTitle: string) => {
    setActiveNavItem(navItemTitle);
  };

  const navItemButtons = [
    { icon: FiHome, title: "Home" },
    { icon: FiRadio, title: "Stocks" },
    { icon: FiBriefcase, title: "Reports" },
    { icon: FiSettings, title: "Settings" },
    { icon: FiActivity, title: "Animals" },
  ];

  return (
    <Flex
      pos="sticky"
      left="4"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      w="250px"
      flexDir="column"
      justifyContent="space-between"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      maxW={navSize === "small" ? "75px" : "250px"}
      bg={'purple.900'}
      opacity={'.9'}
      color={'yellow.200'}
    >
      <Flex flexDir="column">
        <IconButton
          backgroundColor="#AECBCA"
          width="50px"
          mt={8}
          margin={3}
          _hover={{ backgroundColor: "#AECBDA" }}
          icon={<FiMenu />}
          onClick={() => {
            setNavSize((prevSize) =>
              prevSize === "small" ? "large" : "small"
            );
          }}
          aria-label="toggle side panel"
        />
        <List margin={3} marginTop={5}>
          {navItemButtons.map((navItem) => (
            <NavItem
              key={navItem.title}
              icon={navItem.icon}
              title={navItem.title}
              navSize={navSize}
              isActive={activeNavItem === navItem.title}
              onSelect={(title) => handleNavItemClick(title)}
            />
          ))}
        </List>
      </Flex>
      <Flex marginBottom={5}>
        <Flex flexDir="column" paddingLeft={1}>
          <Avatar size="lg" />
          {navSize === "large" && (
            <div style={{ marginLeft: "20px" }}>
              <Heading fontSize="sm">Yeabsira Yonas</Heading>
              <Text>yabulala432@gmail.com</Text>
            </div>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SidebarWithList;
