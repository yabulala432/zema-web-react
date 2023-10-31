import { Grid, Image, GridItem, Show } from "@chakra-ui/react";
import VirginMary from "../assets/VirginMary.png";

const Main = () => {
  return (
    <>
      <Grid
        h="100vh"
        // templateRows="repeat(3, 1fr)"
        // templateColumns="repeat(4, 1fr)"
        gap={1}
        templateAreas={{
          lg: `"geez seel"
               "amharic seel"
               "player player"
                  `,
          base: `
            "geez amharic"
            "geez amharic"
            "player player"
            `,
        }}
              opacity={.8}
      >
        <GridItem area="geez" bg="purple.800">
          Geez
        </GridItem>
        <GridItem area="amharic" bg="blue.300">
          amharic
        </GridItem>
        <GridItem area="player" bg="purple.800">
          player
        </GridItem>
        <Show above="lg">
          <GridItem
            area="seel"
            bgImg={VirginMary}
            bgRepeat="no-repeat"
            bgPos="center"
                      bgSize="contain"
                    //   h={'100vh'}
                    //   w={'25vh'}
            // objectFit='contain'
                  ></GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default Main;
