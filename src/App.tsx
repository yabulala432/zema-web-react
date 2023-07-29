import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import SidebarWithList from "./components/SideBarMain";
import NavBar from "./components/NavBar";

function App() {
  const backgroundImage = useBreakpointValue({
    base: "url('../src/assets/img.png')",
    lg: "url('../src/assets/cropped_2.webp')",
  });

  return (
    <>
      <Grid
        bgImage={useBreakpointValue({ base: backgroundImage })}
        bgSize={"cover"}
        bgRepeat={'no-repeat'}
        // height={'100vh'}
        templateAreas={{
          base: `"nav  nav" 
              " aside main"
              "aside  main"`,
        }}
        templateColumns={{
          base: ".85fr 2fr",
          lg: ".4fr 2fr",
        }}
      >
        <GridItem area={"aside"} padding={0} margin={0} opacity={1}>
          <SidebarWithList />
        </GridItem>

        <GridItem
          area={"main"}
        ></GridItem>

        <GridItem
          bgColor={"blackAlpha.300"}
          height={"100px"}
          p={0}
          m={0}
          area={"nav"}
        >
          <NavBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
