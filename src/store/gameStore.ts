import { create } from 'zustand'
import { SortOption } from '../components/SortSelector'
import ParentPlatform from '../model/ParentPlatform'
import GameQuery from '../model/GameQuery'

interface GameStore {
  gameQuery: GameQuery
  setSearchText: (text: string) => void
  setGenre: (genreName: string | null) => void
  setPlatform: (platform: ParentPlatform | null) => void
  setOrdering: (ordering: SortOption | null) => void
  resetFilters: () => void
}

const useGameStore = create<GameStore>((set) => ({
  gameQuery: {
    genreName: null,
    platform: null,
    ordering: null,
    searchText: null
  },
  
  setSearchText: (text: string) => 
    set((state) => ({
      gameQuery: { ...state.gameQuery, searchText: text }
    })),
  
  setGenre: (genreName: string | null) => 
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreName }
    })),
  
  setPlatform: (platform: ParentPlatform | null) => 
    set((state) => ({
      gameQuery: { ...state.gameQuery, platform }
    })),
  
  setOrdering: (ordering: SortOption | null) => 
    set((state) => ({
      gameQuery: { ...state.gameQuery, ordering }
    })),
  
  resetFilters: () => 
    set(() => ({
      gameQuery: {
        genreName: null,
        platform: null,
        ordering: null,
        searchText: null
      }
    }))
}))

export default useGameStore