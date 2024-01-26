import { Box, Stack, styled } from '@mui/material';

type Props = {
  flavorText?: string;
};

const FlavorTextArea = styled(Stack)({
  width: '230px',
  height: '142px',
  marginTop: '8px',
  padding: '8px',
  borderRadius: '15px',
  border: '7px double #FFE6CA',
  alignItems: 'center',
  justifyContent: 'center',
});

const FlavorText = ({ flavorText }: Props) => {
  return (
    <FlavorTextArea>{flavorText ? flavorText : 'データなし'}</FlavorTextArea>
  );
};

export default FlavorText;
