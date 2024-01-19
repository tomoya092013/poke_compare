import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  styled,
  Typography,
} from '@mui/material';

import { setLeftPoke } from '../../actions/setLeftPoke';
import { setRightPoke } from '../../actions/setRightPoke';
import getPokeData from '../../api/getPokeData';
import getPokeName from '../../api/getPokeName';
import getPokeUrlList from '../../api/getPokeUrlList';
import { Poke, PokeUrl } from '../../type/poke';
import { RootState } from '../../type/rootState';
import { COMPAREHEIGHT, MD, SM, XS } from '../../utils/breakPoint';
import Chart from '../chart';
import PokeImg from './PokeImg';
import TypeColor from './TypeColor';

type Props = {
  drawerOpen: boolean;
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

const PokeCard = ({ drawerOpen }: Props) => {
  const pokeGenerationNo = useSelector(
    (state: RootState) => state.pokeGenerationNo
  );
  const isLeftCompareSide = useSelector((state: RootState) => state.isLeftSide);
  const dispatch = useDispatch();

  const setComparePokeData = (pokeData: Poke) => {
    isLeftCompareSide
      ? dispatch(setLeftPoke(pokeData))
      : dispatch(setRightPoke(pokeData));
  };

  const [pokeList, setPokeList] = useState<Poke[]>();
  const [isLoading, setIsLoading] = useState(true);

  const ScrollableContainer = styled(Box)(({ theme }) => ({
    overflowY: 'auto',
    [theme.breakpoints.up('xs')]: {
      marginTop: `${drawerOpen ? XS + COMPAREHEIGHT : XS}px`,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: `${drawerOpen ? SM + COMPAREHEIGHT : SM}px`,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: `${drawerOpen ? MD + COMPAREHEIGHT : MD}px`,
    },
  }));

  const fetchData = async () => {
    setIsLoading(true);
    const pokeUrlList: PokeUrl[] = await getPokeUrlList(pokeGenerationNo);
    const pokeDataList: Poke[] = await fetchPokeData(pokeUrlList);
    const pokeNameList = await fetchPokeName(pokeDataList);
    const convertData: Poke[] = await pokeDataList.map((poke, index) => ({
      ...poke,
      name: pokeNameList[index],
    }));

    setPokeList(convertData);
    setIsLoading(false);
  };

  const fetchPokeData = async (pokeUrlList: PokeUrl[]) => {
    const resPokeData = pokeUrlList.map(async (pokeUrl) => {
      return await getPokeData(pokeUrl);
    });
    return Promise.all(resPokeData);
  };

  const fetchPokeName = async (pokeDataList: Poke[]) => {
    const resPokeNameData = pokeDataList.map(async (pokeData) => {
      if (pokeData.speciesUrl) return await getPokeName(pokeData.speciesUrl);
    });
    return await Promise.all(resPokeNameData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeGenerationNo]);

  if (isLoading) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        height="20vh"
        sx={{ zIndex: 2 }}
      >
        <CircularProgress size={60} sx={{ color: '#03ff00' }} />
      </Stack>
    );
  }

  if (!pokeList || pokeList.length === 0) {
    return <>データが見つかりません。</>;
  }

  return (
    <ScrollableContainer>
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
                    <TypeColor key={typeIndex} type={type} isCompare={false} />
                  ))}
                </Types>

                <Box
                  onClick={() => setComparePokeData(poke)}
                  sx={{ cursor: 'pointer' }}
                >
                  <PokeImg
                    name={poke.name}
                    img={poke.img}
                    backgroundColor={'#f8ffc5'}
                  />
                </Box>

                <Chart
                  isCompare={false}
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
    </ScrollableContainer>
  );
};

export default PokeCard;