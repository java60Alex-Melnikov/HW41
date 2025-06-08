import { Box, Input, InputGroup } from '@chakra-ui/react'
import { useRef, FC } from 'react'
import { LuSearch } from 'react-icons/lu'
interface Props {
    onSubmitText: (text: string) => void
}
const SearchBar: FC<Props> = ({onSubmitText}) => {
    const inputElem = useRef<HTMLInputElement>(null)
  return (
    <Box width="100%"  as="form" onSubmit={(event) => {
        event.preventDefault();
        onSubmitText(inputElem.current?.value ?? "")
        }}>
        <InputGroup flex="1" startElement={<LuSearch />} >
        <Input ref={inputElem} placeholder="Search games..." borderRadius={"30px"}/>
          </InputGroup>
    </Box>
  )
}

export default SearchBar