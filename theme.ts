// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#fff',
    800: '#fff',
    700: '#fff',
  },
}

export const theme = extendTheme({ colors })
