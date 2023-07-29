import { Heading, Box, List, ListItem, Divider } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { data } from "./Fetch";

type NavHoverBoxProps = {
  title: string;
  // icon: IconType;
  lists:data[]
};

export default function NavHoverBox({ title, lists }: NavHoverBoxProps) {
  return (
    <Box py={4} height="500px" overflow="auto">
      <Box mb={4}>
        <Heading textAlign={'center'}>
          {title}
        </Heading>
      </Box>
      <List spacing={-5}>
        {lists.map((list,index) => (
          <>
            <ListItem
              padding={6}
              fontSize="x-large"
              cursor="pointer"
              _hover={{ color: "#82ddDc" }}
              onClick={() => console.log(list)}
              key={index}
            >
              {list.title}
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
}


// import { Flex, Text, Icon } from "@chakra-ui/react";
// import { IconType } from "react-icons";

// interface NavHoverBoxProps {
//   title: string;
//   icon: IconType;
//   isActive: boolean;
// }

// function NavHoverBox({ title, icon, isActive }:NavHoverBoxProps): any{
//   return (
//     <Flex
//       mt={30}
//       h={"500px"}
//       position={'relative'}
//       flexDir="column"
//       w="100%"
      
//       alignItems={isActive ? "center" : "flex-start"}
//     >
//       <Icon as={icon} fontSize="xl" color={isActive ? "#82AAAD" : "gray.500"} />
//       <Text ml={5} display={isActive ? "none" : "flex"}>
//         {title}
//       </Text>
//     </Flex>
//   );
// };

// export default NavHoverBox;