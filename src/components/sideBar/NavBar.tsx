import { HStack,Image } from "@chakra-ui/react"
import eotcLogo from '../../assets/crossLogo.webp';

const NavBar = () => {
  return (
    <HStack padding={'30px'}>
      <Image src={eotcLogo}
        bgSize={'cover'}
        borderRadius={'20'}
        boxSize={'65px'}
         />
    </HStack>
  )
}

export default NavBar;