import { Menu, Button, Portal, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform';
import MotionComponent from './MotionComponent';
import useGameStore from '../store/gameStore';

const duration=0.7;
const PlatformSelector = () => {
    const { error, data: platforms, isLoading } = usePlatform();
    const selectedPlatform = useGameStore(state => state.gameQuery.platform);
    const setPlatform = useGameStore(state => state.setPlatform);
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    
        {isLoading && <Spinner></Spinner>}
        {!error && <Menu.Root onExitComplete={() => setIsOpen(false)}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3} onClick={() => setIsOpen(!isOpen)}>
         { selectedPlatform?.name || "Platforms"}
          {isOpen ? <MotionComponent duration={duration}>
            <FaChevronUp></FaChevronUp>
          </MotionComponent> :<FaChevronDown></FaChevronDown>}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <MotionComponent duration={duration}>
            <Menu.Content>
            <Menu.Item key={"platform"} value={""}
               onClick={() => {setPlatform(null); setIsOpen(false)}}>All platforms</Menu.Item>
              {platforms.map(p => <Menu.Item key={p.id} value={p.id}
               onClick={() => {setPlatform(p); setIsOpen(false)}}>{p.name}</Menu.Item>)}
            </Menu.Content>
          </MotionComponent>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>}
    </>
    
  )
}

export default PlatformSelector