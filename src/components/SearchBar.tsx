import { Box, Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuSearch } from 'react-icons/lu'
import useGameStore from '../store/gameStore'

const SearchBar = () => {
    const inputElem = useRef<HTMLInputElement>(null)
    const setSearchText = useGameStore(state => state.setSearchText)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setSearchText(inputElem.current?.value ?? "")
    }
  return (
        <Box width="100%" as="form" onSubmit={handleSubmit}>
            <InputGroup flex="1" startElement={<LuSearch />} >
                <Input ref={inputElem} placeholder="Search games" borderRadius={"30px"}/>
            </InputGroup>
        </Box>
  )
}

export default SearchBar