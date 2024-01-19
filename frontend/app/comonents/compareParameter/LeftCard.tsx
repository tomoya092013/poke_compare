import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Stack, styled, Typography } from '@mui/material';

import { changeCardSide } from '../../actions/changeCardSide';
import { RootState } from '../../type/rootState';
import PokeImg from '../pokeCard/PokeImg';
import Status from '../pokeCard/Status';
import TypeColor from '../pokeCard/TypeColor';

const CardArea = styled(Stack)({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const Card = styled(Stack)({
  width: '300px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 5px',
  border: '1px solid #000',
  boxShadow: '15px 11px 15px -5px #707aff',
  borderRadius: '10px',
  cursor: 'pointer',
});

const Types = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});

const LeftCard = () => {
  const leftPokeData = useSelector((state: RootState) => state.leftPokeData);
  const isLeftCompareSide = useSelector((state: RootState) => state.isLeftSide);

  const dispatch = useDispatch();
  const selectLeftSide = () => {
    !isLeftCompareSide && dispatch(changeCardSide());
  };

  return (
    <CardArea>
      <Card
        onClick={selectLeftSide}
        sx={{
          border: isLeftCompareSide ? '8px ridge #ffe500' : '1px solid #000',
        }}
      >
        {leftPokeData.id === 0 ? (
          <>ポケモンを押して！</>
        ) : (
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Typography variant="h6">No.{leftPokeData.id}</Typography>
              <Typography variant="h5">{leftPokeData.name}</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Box>
                <Types>
                  {leftPokeData.types.map((type, typeIndex) => (
                    <TypeColor key={typeIndex} type={type} isCompare={true} />
                  ))}
                </Types>

                <PokeImg
                  name={leftPokeData.name}
                  img={leftPokeData.img}
                  backgroundColor={'#ffc5ec'}
                />
              </Box>
              <Status
                hp={leftPokeData.hp}
                attack={leftPokeData.attack}
                defence={leftPokeData.defence}
                specialAttack={leftPokeData.specialAttack}
                specialDefence={leftPokeData.specialDefence}
                speed={leftPokeData.speed}
              />
            </Stack>
          </Stack>
        )}
      </Card>
    </CardArea>
  );
};

export default LeftCard;
