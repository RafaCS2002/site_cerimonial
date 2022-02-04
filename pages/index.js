// import style from 'styled-components';
import React from 'react';
import { HeaderStyled, ButtonStyled, MainStyled, LogoImgStyled, DivLogoStyled } from '../styles/structuralStyle';
import logo from '../public/img/logo.png';
import {NavButton} from '../src/components/navButton';
// import styles from '../styles/mainPage.module.css';

export default function mainApp() {
    return (
        <>
            <MainStyled>
                <HeaderStyled>
                    <DivLogoStyled>
                        <LogoImgStyled src={logo} alt={'Logo da Empresa'} />
                    </DivLogoStyled>
                    <NavButton/>
                </HeaderStyled>

            </MainStyled>
        </>
    )
}