import { styled, Switch } from '@mui/material';

type Props = {
  checked: boolean;
  onChange: () => void;
};

const Toggle = styled(Switch)({
  width: 50,
  height: 26,
  padding: 0,
  marginLeft: 5,
  borderRadius: '12px',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2.5,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
      },
    },
  },
});

const ToggleButton = ({ checked, onChange }: Props) => {
  return <Toggle onChange={onChange} checked={checked} />;
};

export default ToggleButton;
