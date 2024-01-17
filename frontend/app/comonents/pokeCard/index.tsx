import { Grid, Stack, styled, Typography } from '@mui/material';

import { Poke } from '../../type/poke';
import Chart from '../chart';
import PokeImg from './PokeImg';
import TypeColor from './TypeColor';

type Props = {
  pokeList: Poke[];
};

const CardArea = styled(Stack)({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const Card = styled(Stack)({
  width: '280px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0px',
  border: '1px solid #000',
  boxShadow: '15px 11px 15px -5px #707aff',
  borderRadius: '10px',
});

const Types = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});

const PokeCard = ({ pokeList }: Props) => {
  return (
    <Grid container spacing={2}>
      {pokeList.map((poke) => (
        <Grid key={poke.id} item xs={12} sm={6} md={4}>
          <CardArea>
            <Card>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                <Typography variant="h6">No.{poke.id}</Typography>
                <Typography variant="h5">{poke.name}</Typography>
              </Stack>

              <Types>
                {poke.types.map((type, typeIndex) => (
                  <TypeColor key={typeIndex} type={type} />
                ))}
              </Types>

              <PokeImg name={poke.name} img={poke.img} />
              <Chart
                HP={[poke.hp, 0]}
                attack={[poke.attack, 0]}
                defence={[poke.defence, 0]}
                specialAttack={[poke.specialAttack, 0]}
                specialDefence={[poke.specialDefence, 0]}
                speed={[poke.speed, 0]}
              />
            </Card>
          </CardArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokeCard;
