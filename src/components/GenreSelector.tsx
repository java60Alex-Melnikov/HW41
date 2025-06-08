import { Menu, Button, Portal, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import MotionComponent from './MotionComponent';
import useGenre from '../hooks/useGenre';
import useGameStore from '../store/gameStore';

const duration=0.7;
const GenreSelector = () => {
    const { error, data: genres, isLoading } = useGenre();
    const selectedGenre = useGameStore(state => state.gameQuery.genreName);
    const setGenre = useGameStore(state => state.setGenre);
    const [isOpen, setIsOpen] = useState<boolean>(false);
   function getGenreName(genreSlug: string | null): string | null {
    let res: string | null = null;
    if (genreSlug) {
      const genre = genres.find(g => genreSlug === g.slug);
      genre && (res = genre.name)
    }
    return res;
   }
  return (
    <>
    
        {isLoading && <Spinner></Spinner>}
        {!error && <Menu.Root onExitComplete={() => setIsOpen(false)}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3} onClick={() => setIsOpen(!isOpen)}>
         { getGenreName(selectedGenre) || "Genres"}
          {isOpen ? <MotionComponent duration={duration}>
            <FaChevronUp></FaChevronUp>
          </MotionComponent> :<FaChevronDown></FaChevronDown>}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <MotionComponent duration={duration}>
            <Menu.Content>
            <Menu.Item key={"genre"} value={""}
               onClick={() => {setGenre(null); setIsOpen(false)}}>All genres</Menu.Item>
              {genres.map(g => <Menu.Item key={g.slug} value={g.slug}
               onClick={() => {setGenre(g.slug); setIsOpen(false)}}>{g.name}</Menu.Item>)}
            </Menu.Content>
          </MotionComponent>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>}
    </>
    
  )
}

export default GenreSelector