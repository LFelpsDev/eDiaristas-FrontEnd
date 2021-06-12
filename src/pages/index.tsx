import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data display/PageTitle/PageTitle";
import UserInformation from "ui/components/data display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import UseIndex from "../data/hooks/pages/useindex.page"


export default function Home() {
    const { contador, setContador } = UseIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais  da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />{" "}
          {/*<- Somente para funcionar o OutlinedTextFieldProps*/}
          <Typography color={"error"}>Cep Invalido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Luis Felipe"}
              picture={"https://github.com/lufegs.png"}
              rating={3}
              description={"São Paulo"}
            />

            <UserInformation
              name={"Alana Nascimentop"}
              picture={"https://github.com/alanazip.png"}
              rating={4}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Paulo Silveiro"}
              picture={"https://github.com/Paulo-Silverio.png"}
              rating={5}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Fernando Silvestre"}
              picture={"https://github.com/Ferbatman.png"}
              rating={2}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Luis Felipe"}
              picture={"https://github.com/lufegs.png"}
              rating={4}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Lucas Alves"}
              picture={"https://github.com/phytoline.png"}
              rating={55}
              description={"São Paulo"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
