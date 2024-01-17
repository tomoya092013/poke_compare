import React from 'react';

import { Avatar } from '@mui/material';

type Props = {
  name?: string;
  img: string;
};
const PokeImg = ({ name, img }: Props) => {
  return (
    <Avatar
      alt={name}
      src={img}
      sx={{
        padding: '10px',
        width: 125,
        height: 125,
        backgroundColor: '#fffabb',
        borderRadius: '50%',
      }}
    />
  );
};

export default PokeImg;
