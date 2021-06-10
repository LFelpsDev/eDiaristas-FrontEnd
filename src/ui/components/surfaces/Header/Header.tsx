import React from 'react';
import { HeaderAppBar, HeaderLogo } from './Header.style';
import { Toolbar, Container } from '@material-ui/core'

// import { Container } from './styles';

const Header: React.FC = () => {
  return ( 
  <HeaderAppBar position={'sticky'}>
    <Toolbar component={Container}> {/*Ja possui alinhamento vertical */}
        <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
    </Toolbar>
  </HeaderAppBar>
  )
}

export default Header;