// import style from 'styled-components';
import React from 'react';
import {
    HeaderStyled, ButtonStyled, MainStyled, LogoImgStyled, DivLogoStyled,
    Holder, Option
} from '../styles/structuralStyle';
import logo from '../public/img/logo.png';
import { NavButton, openNav, BarsOptions } from '../src/components/navButton';
// import styles from '../styles/mainPage.module.css';

export default function mainApp() {
    return (
        <>
            <MainStyled>
                <HeaderStyled>
                    <DivLogoStyled>
                        <LogoImgStyled src={logo} alt={'Logo da Empresa'} />
                    </DivLogoStyled>
                    <Holder>
                        <Option link={'#'}>Sobre Nos</Option>
                        <Option link={'#'}>Trabalhos</Option>
                        <Option link={'#'}>Metodo</Option>
                        <Option link={'#'}>Aliados</Option>
                        <NavButton />
                    </Holder>
                </HeaderStyled>
                
            </MainStyled>
        </>
    )
}