import React from 'react';
import { OrganizationsContextProvider } from './store/OrganizationContext';
import { OrganizationsList } from './components/organisms/OrganizationsList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/global.scss';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat',
      textTransform: 'none'
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
          },
        },              
      ],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <OrganizationsContextProvider>
        <OrganizationsList />
      </OrganizationsContextProvider>
    </ThemeProvider>
  );
}

export default App;
