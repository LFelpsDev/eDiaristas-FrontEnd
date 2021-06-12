import { experimentalStyled as styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgb(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      //Modificando o Toolbar do Header.tsx sem precisar criar outra estilização, aqui estou pegando uma classe pronto do @material-ui/core.
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  ${({theme}) => theme.spacing(3)}; // 24 px 

  ${({ theme }) => theme.breakpoints.up("md")}{
    height: 47px;
  }
`;
