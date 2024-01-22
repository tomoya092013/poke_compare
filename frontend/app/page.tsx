'use client';

import Head from 'next/head';
import { useState } from 'react';
import { Provider } from 'react-redux';

import { Box, Divider, styled } from '@mui/material';

import CompareParameter from './comonents/compareParameter';
import GenerationList from './comonents/generationList';
import PokeCard from './comonents/pokeCard';
import ToggleButton from './comonents/toggleButton';
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
  const [compareOpen, setCompareOpen] = useState(false);
  const [isChart, setIsChart] = useState(true);

  const toggleOpen = () => {
    setCompareOpen(!compareOpen);
  };

  const clickToggleChartFlavorText = () => {
    setIsChart(!isChart);
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
        <CompareParameter toggleOpen={toggleOpen} compareOpen={compareOpen} />
        <GenerationList />
        <Divider>
          ポケモンデータ
          <ToggleButton
            checked={isChart}
            onChange={clickToggleChartFlavorText}
          />
        </Divider>
      </HeaderContainer>
      <PokeCard compareOpen={compareOpen} isChart={isChart} />
    </Provider>
  );
};

export default Page;
