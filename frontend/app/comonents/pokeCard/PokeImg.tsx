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
        width: 150,
        height: 150,
        backgroundColor: backgroundColor,
        borderRadius: '50%',
        overflow: 'visible',
      }}
    />
  );
};

export default PokeImg;
