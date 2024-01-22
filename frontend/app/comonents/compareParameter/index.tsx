import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

import { Divider, Stack } from '@mui/material';

import { RootState } from '../../type/rootState';
import ToggleButton from '../toggleButton';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Chart = dynamic(() => import('../chart'), { ssr: false });

type Props = {
  toggleOpen: () => void;
  compareOpen: boolean;
};

const CompareParameter = ({ toggleOpen, compareOpen }: Props) => {
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
        種族値比較エリア
        <ToggleButton checked={compareOpen} onChange={toggleOpen} />
      </Divider>
    </>
  );
};

export default CompareParameter;
