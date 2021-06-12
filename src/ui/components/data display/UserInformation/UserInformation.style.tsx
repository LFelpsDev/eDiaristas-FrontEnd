import { experimentalStyled as styled } from "@material-ui/core";
import { Avatar, Rating } from '@material-ui/core'

export const UserInformationContainer = styled('div')`
  display: grid;
  grid-template-columns: 60px 1fr; 
  grid-template-rows: repeat(3, auto); // <- Inves de auto, auto, auto
  grid-template-areas: 
    'avatar name' // cada gropo entre aspas vai ser uma linha
    'avatar rating'
    'avatar description';
  background-color: ${({theme}) => theme.palette.grey[50]};
  padding: ${({theme}) => theme.spacing(3)}; // 24 px
  gap: ${({theme}) => theme.spacing(0.5) + ' ' + theme.spacing(3)}; /// o primeiro é espaços das linhas e o segundo é espaços das colunas
  align-items: center;
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({theme}) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1; // para manter a proporsão altura e largura do mesmo tamanho
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;