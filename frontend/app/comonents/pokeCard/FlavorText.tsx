import { Box, styled } from '@mui/material';

type Props = {
  flavorText?: string;
};

const FlavorTextArea = styled(Box)({
  width: '230px',
  marginTop: '8px',
  padding: '8px',
  borderRadius: '15px',
  border: '7px double #FFE6CA',
});

const FlavorText = ({ flavorText }: Props) => {
  return (
    <FlavorTextArea>{flavorText ? flavorText : 'データなし'}</FlavorTextArea>
  );
};

export default FlavorText;
