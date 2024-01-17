import React from 'react';

import { Box, Stack, styled } from '@mui/material';

type Props = {
  hp: number;
  attack: number;
  defence: number;
  specialAttack: number;
  specialDefence: number;
  speed: number;
};

const StatusText = styled(Box)({
  marginTop: '5px',
  fontSize: '18px',
});

const Status = ({
  hp,
  attack,
  defence,
  specialAttack,
  specialDefence,
  speed,
}: Props) => {
  return (
    <Stack justifyContent="center" alignItems="flex-start">
      <StatusText>HP : {hp}</StatusText>
      <StatusText>こうげき : {attack}</StatusText>
      <StatusText>ぼうぎょ : {defence}</StatusText>
      <StatusText>とくこう : {specialAttack}</StatusText>
      <StatusText>とくぼう : {specialDefence}</StatusText>
      <StatusText>すばやさ : {speed}</StatusText>
    </Stack>
  );
};

export default Status;
