import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Divider, Stack, Switch } from '@mui/material';

import { RootState } from '../../type/rootState';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Chart = dynamic(() => import('../chart'), { ssr: false });

type Props = {
  toggleOpen: () => void;
  drawerOpen: boolean;
};

const CompareParameter = ({ toggleOpen, drawerOpen }: Props) => {
  const leftPokeData = useSelector((state: RootState) => state.leftPokeData);
  const rightPokeData = useSelector((state: RootState) => state.rightPokeData);

  return (
    <>
      {drawerOpen && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '250px' }}
        >
          <LeftCard />
          <Chart
            isCompare={true}
            HP={[leftPokeData.hp, rightPokeData.hp]}
            attack={[leftPokeData.attack, rightPokeData.attack]}
            defence={[leftPokeData.defence, rightPokeData.defence]}
            specialAttack={[
              leftPokeData.specialAttack,
              rightPokeData.specialAttack,
            ]}
            specialDefence={[
              leftPokeData.specialDefence,
              rightPokeData.specialDefence,
            ]}
            speed={[leftPokeData.speed, rightPokeData.speed]}
          />
          <RightCard />
        </Stack>
      )}

      <Divider sx={{ margin: '10px' }}>
        種族値比較エリア
        <Switch checked={drawerOpen} onChange={toggleOpen} color="warning" />
      </Divider>
    </>
  );
};

export default CompareParameter;
