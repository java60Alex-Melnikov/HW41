import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/image.png'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar'
import { FC } from 'react'
interface Props {
  onSubmitText: (text: string) => void
}
const Nav: FC<Props> = ({onSubmitText}) => {
  return (
    <HStack justifyContent="space-between">
       <Image src={logo} boxSize={"10"}/>
       <SearchBar onSubmitText={(text:string)=>onSubmitText(text)}></SearchBar>
       <ColorModeButton/>
    </HStack>
  )
}

export default Nav