import React from 'react';
import { CardsContext } from './context/CardsContext';
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
      <CardsContext.Provider value={{}}>
        <OrganizationsList />
      </CardsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
