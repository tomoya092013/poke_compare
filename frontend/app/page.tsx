'use client';

import Head from 'next/head';
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Provider store={store}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
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
