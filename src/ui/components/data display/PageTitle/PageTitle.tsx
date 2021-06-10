import React from "react";
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style'


interface PageTitleProps { //Tipando para ficar mais facil do Conhecimento no VsCode
  title: string;
  subtitle?: string; //O Sinal de ? antes dos 2 pontos indica que a propriedade sera opciona
}

const PageTitle: React.FC<PageTitleProps> = (props) => { 

  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle} </PageSubtitleStyled>
    </PageTitleContainer>
    );
};

export default PageTitle;
