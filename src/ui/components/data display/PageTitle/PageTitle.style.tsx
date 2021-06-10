import { experimentalStyled as styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) =>
    theme.spacing(5) +
    " " +
    0}; // <= seria a mesma coisa que (margin: 40px 0;) 1 = 8px 2 = 16px... 5 = 40px
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  /* color: ${(props) => props.theme.palette.primary.main}; */
  color: ${({ theme }) =>
    theme.palette.primary.main}; // Acessando o Tema do Material UI
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) =>
      theme.typography.body1.fontSize}; // body1 = Tamanho do  Corpo
  } // estou colocando um BreackPoint para quando o tamanho da tela for menor (down) que medio.
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + 0}; // = 12px 0px
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
