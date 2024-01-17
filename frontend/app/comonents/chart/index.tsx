import { PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

import { Box, Stack, Typography } from '@mui/material';

type Props = {
  HP: number[];
  attack: number[];
  defence: number[];
  specialAttack: number[];
  specialDefence: number[];
  speed: number[];
};

type StatusProps = {
  title: string;
  titleTop: number;
  titleLeft: number;
  status: number;
  top: number;
  left: number;
};

const Chart = ({
  HP,
  attack,
  defence,
  specialAttack,
  specialDefence,
  speed,
}: Props) => {
  const data = [
    {
      title: 'HP',
      A: HP[0],
      B: HP[1],
    },
    {
      title: 'こうげき',
      A: attack[0],
      B: attack[1],
    },
    {
      title: 'ぼうぎょ',
      A: defence[0],
      B: defence[1],
    },
    {
      title: 'とくこう',
      A: specialAttack[0],
      B: specialAttack[1],
    },
    {
      title: 'とくぼう',
      A: specialDefence[0],
      B: specialDefence[1],
    },
    {
      title: 'すばやさ',
      A: speed[0],
      B: speed[1],
    },
  ];

  const StatusValue = ({
    title,
    titleTop,
    titleLeft,
    status,
    top,
    left,
  }: StatusProps) => {
    return (
      <>
        <Box
          sx={{
            position: 'absolute',
            top: `${titleTop}px`,
            left: `${titleLeft}px`,
          }}
        >
          <Typography variant="caption">{title}</Typography>
        </Box>
        <Box sx={{ position: 'absolute', top: { top }, left: { left } }}>
          {status}
        </Box>
      </>
    );
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <RadarChart width={200} height={200} data={data}>
          <PolarGrid />
          <PolarRadiusAxis angle={90} domain={[0, 160]} />
          <Radar
            dataKey="A"
            stroke="#3CB371"
            fill="#98FB98"
            fillOpacity={0.6}
          />
          <Radar dataKey="B" stroke="blue" fill="black" fillOpacity={0.6} />
        </RadarChart>
        <Stack direction="row" sx={{ position: 'absolute', top: 0, left: 80 }}>
          <Typography variant="caption">HP</Typography>
          <Box marginLeft="5px"> {HP[0]}</Box>
        </Stack>
        <StatusValue
          title={'こうげき'}
          titleTop={35}
          titleLeft={150}
          status={attack[0]}
          top={55}
          left={175}
        />
        <StatusValue
          title={'ぼうぎょ'}
          titleTop={150}
          titleLeft={150}
          status={defence[0]}
          top={130}
          left={175}
        />
        <Stack
          direction="row"
          sx={{ position: 'absolute', top: 180, left: 60 }}
        >
          <Typography variant="caption">とくこう</Typography>
          <Box marginLeft="5px">{specialAttack[0]}</Box>
        </Stack>
        <StatusValue
          title={'とくぼう'}
          titleTop={150}
          titleLeft={0}
          status={specialDefence[0]}
          top={130}
          left={0}
        />
        <StatusValue
          title={'すばやさ'}
          titleTop={35}
          titleLeft={0}
          status={speed[0]}
          top={55}
          left={0}
        />
      </Box>
    </>
  );
};

export default Chart;
