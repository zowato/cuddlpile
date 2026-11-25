import { colorsTuple, createTheme, MantineColorsTuple } from '@mantine/core';

export const primary: MantineColorsTuple = [
  '#f3edff',
  '#e1d8f8',
  '#bfaeec',
  '#9b82e1',
  '#7d5cd7',
  '#6a44d1',
  '#6038d0',
  '#542dc2',
  '#4625a5',
  '#3b1e92'
];

export const theme = createTheme({
  colors: {
    primary, dark: colorsTuple('#2b2a38')
  },
  primaryColor: 'primary',
  
});

