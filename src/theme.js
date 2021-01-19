import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#b7e2fb',
    100: '#6ec4f6',
    200: '#56baf5',
    300: '#3eb1f3',
    400: '#26a7f2',
    500: '#0E9DF0',
    600: '#0d8dd8',
    700: '#0b7ec0',
    800: '#0a6ea8',
    900: '#074f78',
  },
};

const fonts = {
  heading: 'Montserrat',
  body: 'Montserrat',
};
const theme = extendTheme({
  colors,
  fonts,
});

export default theme;
