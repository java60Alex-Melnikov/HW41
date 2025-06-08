import { Genre } from "../model/fetch-genre-types";
import useData from "./useData";

export default function useGenre(): {data: Genre[], error: string, isLoading: boolean} {
    return useData<Genre>("/genres")
}