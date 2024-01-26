import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Grid, Stack, styled } from '@mui/material';

import { setPokeGenerationNo } from '../../actions/selectGeneration';
import { GenerationNo } from '../../type/poke';
import { generationList } from '../../utils/generationList';

type Props = {
  generationOpen: boolean;
};

const GenerationList = styled(Grid)({
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '20px 0px',
});

const StyledButton = styled(Button)({
  width: '80px',
  padding: '4px 8px',
  border: '2px solid',
  borderColor: '#0027ff',
  fontWeight: 'bold',
  '&:hover': {
    border: '2px solid',
    borderColor: '#0027ff',
    backgroundColor: '#ffe500',
    color: '#fff',
  },
});

const GenerationButton = ({ generationOpen }: Props) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(0);

  const selectGeneration = (generationNo: GenerationNo, index: number) => {
    setIsSelected(index);
    dispatch(
      setPokeGenerationNo({ start: generationNo.start, end: generationNo.end })
    );
  };

  return (
    <>
      {generationOpen && (
        <GenerationList
          container
          sx={{
            margin: '0px',
          }}
        >
          {generationList.map((generation, index) => (
            <Grid
              key={index}
              item
              xs={3}
              sm={2}
              md={1}
              margin={1}
              justifyContent="center"
            >
              <Stack justifyContent="center" alignItems="center">
                <StyledButton
                  key={index}
                  variant="outlined"
                  onClick={() =>
                    selectGeneration(generation.generationNo, index)
                  }
                  sx={{
                    backgroundColor: isSelected === index ? '#ffe500' : '',
                  }}
                >
                  {generation.title}
                </StyledButton>
              </Stack>
            </Grid>
          ))}
        </GenerationList>
      )}
    </>
  );
};

export default GenerationButton;
