import { Menu, Button, Portal, Spinner } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform';
import ParentPlatform from '../model/ParentPlatform';
import MotionComponent from './MotionComponent';

interface Props {
    onSelectPlatform: (selectedPlatform: ParentPlatform | null) => void;
    selectedPlatform: ParentPlatform | null
}
const duration=0.7;
const PlatformSelector: FC<Props> = ({onSelectPlatform, selectedPlatform}) => {
    const {error, data:platforms, isLoading} = usePlatform();
   const [isOpen, setIsOpen] =  useState<boolean>(false)
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
               onClick={() => {onSelectPlatform(null); setIsOpen(false)}}>All platforms</Menu.Item>
              {platforms.map(p => <Menu.Item key={p.id} value={p.id}
               onClick={() => {onSelectPlatform(p); setIsOpen(false)}}>{p.name}</Menu.Item>)}
            </Menu.Content>
          </MotionComponent>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>}
    </>
    
  )
}

export default PlatformSelector