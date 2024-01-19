'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';

import { Box, Divider, styled } from '@mui/material';

import CompareParameter from './comonents/compareParameter';
import GenerationList from './comonents/generationList';
import PokeCard from './comonents/pokeCard';
import store from './store/store';

const HeaderContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1,
  backgroundColor: '#fff',
});

const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Provider store={store}>
      <HeaderContainer>
        <CompareParameter toggleOpen={toggleOpen} drawerOpen={drawerOpen} />
        <GenerationList />
        <Divider sx={{ margin: '10px' }}>ポケモンデータ</Divider>
      </HeaderContainer>
      <PokeCard drawerOpen={drawerOpen} />
    </Provider>
  );
};

export default Page;
