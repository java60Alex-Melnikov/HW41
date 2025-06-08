import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/image.png'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar'
const Nav = () => {
  return (
    <HStack justifyContent="space-between">
       <Image src={logo} boxSize={"10"}/>
       <SearchBar />
       <ColorModeButton/>
    </HStack>
  )
}

export default Nav