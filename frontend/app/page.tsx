'use client';

import Head from 'next/head';
import { useState } from 'react';
import { Provider } from 'react-redux';

import { Box, Divider, Stack, styled } from '@mui/material';

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
  const [generationOpen, setGenerationOpen] = useState(true);
  const [isChart, setIsChart] = useState(true);
  const [isHira, setIsHira] = useState(false);

  const toggleHiraKana = () => {
    setIsHira(!isHira);
  };

  const toggleCompare = () => {
    setCompareOpen(!compareOpen);
  };

  const clickToggleChartFlavorText = () => {
    setIsChart(!isChart);
  };

  const toggleGeneration = () => {
    setGenerationOpen(!generationOpen);
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
        <CompareParameter
          toggleCompare={toggleCompare}
          compareOpen={compareOpen}
          toggleGeneration={toggleGeneration}
          generationOpen={generationOpen}
        />
        <GenerationList generationOpen={generationOpen} />
        <Divider sx={{}}>
          <Stack direction="row">
            <Stack direction="row">
              パラメーター
              <ToggleButton
                checked={isChart}
                onChange={clickToggleChartFlavorText}
              />
            </Stack>
            <Stack direction="row" marginLeft="10px">
              ひらがな
              <ToggleButton checked={isHira} onChange={toggleHiraKana} />
            </Stack>
          </Stack>
        </Divider>
      </HeaderContainer>
      <PokeCard
        compareOpen={compareOpen}
        generationOpen={generationOpen}
        isChart={isChart}
        isHira={isHira}
      />
    </Provider>
  );
};

export default Page;
