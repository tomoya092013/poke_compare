import { Box, Typography } from '@mui/material';

import { getTypeInfo } from '../../utils/typeColor';

type Props = {
  type: string;
};

const TypeColor = ({ type }: Props) => {
  const { name, color } = getTypeInfo(type);

  return (
    <Box
      sx={{
        backgroundColor: color,
        margin: '10px 2px',
        padding: '5px 10px',
        borderRadius: '10px',
        minWidth: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="white">{name}</Typography>
    </Box>
  );
};

export default TypeColor;
