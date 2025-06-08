import "./App.css";
import { Box, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main" ',
        md: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside" paddingX="5">
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main" paddingX="5">
        <HStack justifyContent="space-around">
          <PlatformSelector />
          <SortSelector />
          <Box as="span" hideBelow={"sm"} hideFrom={"md"}>
            <GenreSelector />
          </Box>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;