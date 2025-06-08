import "./App.css";
import { Box, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import GameQuery from "./model/GameQuery";
import SortSelector from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main" ',
        md: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Nav
          onSubmitText={(text: string) => {
            console.log(text, "app comp");
            setGameQuery({ ...gameQuery, searchText: text });
          }}
        ></Nav>
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside" paddingX="5">
          <GenreList
            selectedGenre={gameQuery.genreName}
            onSelectGenre={(genreName: string | null) =>
              setGameQuery({ ...gameQuery, genreName })
            }
          />
        </GridItem>
      </Stack>
      <GridItem area="main" paddingX="5">
        <HStack justifyContent="space-around">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          ></PlatformSelector>
          <SortSelector
            onSelectOrdering={(option) =>
              setGameQuery({ ...gameQuery, ordering: option })
            }
            selectedOrdering={gameQuery.ordering}
          ></SortSelector>
          <Box as="span" hideBelow={"sm"} hideFrom={"md"}><GenreSelector selectedGenre={gameQuery.genreName} onSelectGenre={(genreName) =>
          setGameQuery({...gameQuery, genreName})}
          ></GenreSelector></Box>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
