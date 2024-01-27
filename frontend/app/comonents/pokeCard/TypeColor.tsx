import { Box, Typography } from '@mui/material';

import { getTypeInfo } from '../../utils/typeColor';

type Props = {
  type: string;
  isCompare: boolean;
};

const TypeColor = ({ type, isCompare }: Props) => {
  const { name, color } = getTypeInfo(type);

  return (
    <Box
      sx={{
        backgroundColor: color,
        margin: '5px 1px',
        padding: isCompare ? '2px 3px' : '5px 10px',
        borderRadius: '10px',
        width: isCompare ? '60px' : '105px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="white" fontSize={isCompare ? '10px' : '20px'}>
        {name}
      </Typography>
    </Box>
  );
};

export default TypeColor;
