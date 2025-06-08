import React from "react";
import no_image from '../assets/no_image.jpg'
import { Game } from "../model/fetch-game-types";
import { Card, Image, Text, HStack, Badge, VStack } from "@chakra-ui/react";
import Rater from "./Rater";
interface Props {
  game: Game;
}
function getColors(metacritic: number): { color: string; bg: string } {
  let res: { color: string; bg: string };
  res =
    metacritic > 90
      ? { color: "white", bg: "green" }
      : { color: "black", bg: "lightgray" };
  return res;
}
const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card.Root
      maxW={{
        base: "xs",
        sm: "sm",
      }}
      overflow="hidden"
    >
     <Image
        height={"100%"}
        objectFit={"cover"}
        src={game.background_image || no_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap="2">
        <Card.Title overflow={"hidden"}
        textWrap={"nowrap"} textOverflow={"ellipsis"}>{game.name}</Card.Title>
        <Card.Footer>
          <VStack>
            <HStack justifyContent={"space-between"}>
              <Text>
                {game.parent_platforms?.map((p) => p.platform.slug).join("; ")}
              </Text>
              {game.metacritic &&<Badge
                {...getColors(game.metacritic)}
                fontSize={"0.5rem"}
                borderRadius={20}
              >
                {game.metacritic}
              </Badge>}
            </HStack>
            <Rater rate={game.rating}></Rater>
          </VStack>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
