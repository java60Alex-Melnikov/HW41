import ParentPlatform from "../model/ParentPlatform";
import useData from "./useData";

export default function usePlatform() {
    return useData<ParentPlatform>("/platforms/lists/parents")
}