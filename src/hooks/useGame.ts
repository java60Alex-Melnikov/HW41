import { Game } from "../model/fetch-game-types";
import GameQuery from "../model/GameQuery";
import useData from "./useData";

export default function useGame(gameQuery: GameQuery): {data: Game[], isLoading: boolean, error: string} {
    console.log(gameQuery.searchText)
    return useData<Game>("/games", {params:{genres: gameQuery.genreName, parent_platforms:gameQuery.platform?.id,
         ordering: gameQuery.ordering?.value, search: gameQuery.searchText}}, [gameQuery]);
}