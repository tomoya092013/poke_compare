import React from 'react';

import { Avatar } from '@mui/material';

type Props = {
  name?: string;
  img: string;
  backgroundColor: string;
};
const PokeImg = ({ name, img, backgroundColor }: Props) => {
  return (
    <Avatar
      alt={name}
      src={img}
      sx={{
        padding: '10px',
        width: 125,
        height: 125,
        backgroundColor: backgroundColor,
        borderRadius: '50%',
      }}
    />
  );
};

export default PokeImg;
