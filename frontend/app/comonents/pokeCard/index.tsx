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
import getPokeJaData from '../../api/getPokeJaData';
import getPokeUrlList from '../../api/getPokeUrlList';
import { Poke, PokeUrl } from '../../type/poke';
import { RootState } from '../../type/rootState';
import {
  BASE,
  COMPARE_HEIGHT,
  GENERATION_MD,
  GENERATION_SM,
  GENERATION_XS,
} from '../../utils/breakPoint';
import Chart from '../chart';
import FlavorText from './FlavorText';
import PokeImg from './PokeImg';
import TypeColor from './TypeColor';

type Props = {
  compareOpen: boolean;
  generationOpen: boolean;
  isChart: boolean;
  isHira: boolean;
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
  backgroundColor: '#fff',
});

const Types = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});

const PokeCard = ({ compareOpen, generationOpen, isChart, isHira }: Props) => {
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
      marginTop: `${
        compareOpen
          ? BASE + COMPARE_HEIGHT + (generationOpen ? GENERATION_XS : 0)
          : BASE + (generationOpen ? GENERATION_XS : 0)
      }px`,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: `${
        compareOpen
          ? BASE + COMPARE_HEIGHT + (generationOpen ? GENERATION_SM : 0)
          : BASE + (generationOpen ? GENERATION_SM : 0)
      }px`,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: `${
        compareOpen
          ? BASE + COMPARE_HEIGHT + (generationOpen ? GENERATION_MD : 0)
          : BASE + (generationOpen ? GENERATION_MD : 0)
      }px`,
    },
  }));

  const fetchData = async () => {
    setIsLoading(true);
    const pokeUrlList: PokeUrl[] = await getPokeUrlList(pokeGenerationNo);
    const pokeDataList: Poke[] = await fetchPokeData(pokeUrlList);
    const pokeJaDataList = await fetchPokeJaData(pokeDataList);
    const convertData: Poke[] = pokeDataList.map((poke, index) => ({
      ...poke,
      name: pokeJaDataList[index]?.name,
      flavorText: pokeJaDataList[index]?.flavorText,
    }));

    setPokeList(convertData);
    setIsLoading(false);
  };

  const kataToHira = (str: string) => {
    return str.replace(/[\u30A1-\u30FA]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60)
    );
  };

  const hiraToKata = (str: string) => {
    return str.replace(/[\u3041-\u3096]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    );
  };

  const nameHiraKana = (name: string | undefined) => {
    if (name) {
      return isHira ? kataToHira(name) : hiraToKata(name);
    }
    return '';
  };

  const fetchPokeData = async (pokeUrlList: PokeUrl[]) => {
    const resPokeData = pokeUrlList.map(async (pokeUrl) => {
      return await getPokeData(pokeUrl);
    });
    return Promise.all(resPokeData);
  };

  const fetchPokeJaData = async (pokeDataList: Poke[]) => {
    const resPokeJaDataList = pokeDataList.map(async (pokeData) => {
      if (pokeData.speciesUrl) return await getPokeJaData(pokeData.speciesUrl);
    });
    return await Promise.all(resPokeJaDataList);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeGenerationNo]);

  if (isLoading) {
    return (
      <Stack
        sx={{
          zIndex: 1000,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CircularProgress size={70} sx={{ color: '#03ff00' }} />
      </Stack>
    );
  }

  if (!pokeList) {
    return <>データが見つかりません。</>;
  }

  // console.log('う', pokeList);

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
                  <Typography variant="h5" sx={{ cursor: 'pointer' }}>
                    {nameHiraKana(poke.name)}
                  </Typography>
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

                {isChart ? (
                  <Chart
                    isCompare={false}
                    HP={[poke.hp, 0]}
                    attack={[poke.attack, 0]}
                    defence={[poke.defence, 0]}
                    specialAttack={[poke.specialAttack, 0]}
                    specialDefence={[poke.specialDefence, 0]}
                    speed={[poke.speed, 0]}
                  />
                ) : (
                  <FlavorText flavorText={poke.flavorText} />
                )}
              </Card>
            </CardArea>
          </Grid>
        ))}
      </Grid>
    </ScrollableContainer>
  );
};

export default PokeCard;
