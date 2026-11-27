import { createTheme, MantineColorsTuple } from '@mantine/core';

const primary: MantineColorsTuple = [
  '#f3edff',
  '#e1d8f8',
  '#bfaeec',
  '#9b82e1',
  '#7d5cd7',
  '#6a44d1',
  '#6038d0',
  '#542dc2',
  '#4625a5',
  '#3b1e92',
];

// Mantine dark mode: dark[0] = text, dark[2] = dimmed text, dark[7] = page background.
const dark: MantineColorsTuple = [
  '#ffffff',
  '#a99fb2',
  '#a99fb2',
  '#a99fb2',
  '#a99fb2',
  '#3c2dc2',
  '#3c2dc2',
  '#2b2a38',
  '#3c2dc2',
  '#3c2dc2',
];

export const theme = createTheme({
  colors: {
    primary,
    dark,
  },
  primaryColor: 'primary',
});
