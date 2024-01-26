import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

import { Box, Divider, Stack, Typography } from '@mui/material';

import { RootState } from '../../type/rootState';
import ToggleButton from '../toggleButton';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Chart = dynamic(() => import('../chart'), { ssr: false });

type Props = {
  toggleCompare: () => void;
  compareOpen: boolean;
  toggleGeneration: () => void;
  generationOpen: boolean;
};

const CompareParameter = ({
  toggleCompare,
  compareOpen,
  toggleGeneration,
  generationOpen,
}: Props) => {
  const leftPokeData = useSelector((state: RootState) => state.leftPokeData);
  const rightPokeData = useSelector((state: RootState) => state.rightPokeData);

  return (
    <>
      {compareOpen && (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
          sx={{ height: '250px', overflowX: 'auto' }}
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
        <Stack direction="row">
          比較エリア
          <ToggleButton checked={compareOpen} onChange={toggleCompare} />
          <Stack direction="row" marginLeft="10px">
            世代
            <ToggleButton
              checked={generationOpen}
              onChange={toggleGeneration}
            />
          </Stack>
        </Stack>
      </Divider>
    </>
  );
};

export default CompareParameter;
