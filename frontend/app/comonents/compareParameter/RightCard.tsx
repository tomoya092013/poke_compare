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

const RightCard = () => {
  const rightPokeData = useSelector((state: RootState) => state.rightPokeData);
  const isLeftCompareSide = useSelector((state: RootState) => state.isLeftSide);

  const dispatch = useDispatch();
  const selectRightSide = () => {
    isLeftCompareSide && dispatch(changeCardSide());
  };

  return (
    <CardArea>
      <Card
        onClick={selectRightSide}
        sx={{
          border: isLeftCompareSide ? '1px solid #000' : '8px ridge #ffe500',
        }}
      >
        {rightPokeData.id === 0 ? (
          <>ポケモンを選んで！！</>
        ) : (
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Typography variant="h6">No.{rightPokeData.id}</Typography>
              <Typography variant="h5">{rightPokeData.name}</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Status
                hp={rightPokeData.hp}
                attack={rightPokeData.attack}
                defence={rightPokeData.defence}
                specialAttack={rightPokeData.specialAttack}
                specialDefence={rightPokeData.specialDefence}
                speed={rightPokeData.speed}
              />
              <Box>
                <Types>
                  {rightPokeData.types.map((type, typeIndex) => (
                    <TypeColor key={typeIndex} type={type} isCompare={true} />
                  ))}
                </Types>

                <PokeImg
                  name={rightPokeData.name}
                  img={rightPokeData.img}
                  backgroundColor={'#c5fff8'}
                />
              </Box>
            </Stack>
          </Stack>
        )}
      </Card>
    </CardArea>
  );
};

export default RightCard;
