import { experimentalStyled as styled } from '@material-ui/core/styles';

export const SafeEnvironmentContainer = styled('div')` // elemento que é um componente
  color: ${({theme}) => theme.palette.text.secondary};
  background-color: ${({theme}) => theme.palette.background.default};
  text-align: right;
  padding: ${({theme}) => theme.spacing(2)} 0; // == padding: 16px 0;
  font-size: 12px;
`;