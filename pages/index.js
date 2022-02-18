// import style from 'styled-components';
import React from 'react';
import {
    HeaderStyled, ButtonStyled, MainStyled, LogoImgStyled, DivLogoStyled,
    Holder, Option, IntroImage, SecNoneBg, SecTitle, SecTxt, SecWithBg, TextContainer,
    BoxesContainer, AllyBox, FooterStyled, FooterLogo, FooterInfo, InfoBox, FooterTitle, FooterLink
} from '../styles/structuralStyle';
import logo from '../public/img/logo.png';
import { NavButton } from '../src/components/navButton';
import imgIntro from '../public/img/introImage.jpg';
import imgArt01 from '../public/img/concert.jpg';
import imgArt02 from '../public/img/fireworks.jpg';

export default function mainApp() {
    return (
        <>
            <MainStyled>
                <HeaderStyled>
                    <DivLogoStyled>
                        <LogoImgStyled src={logo} alt={'Logo da Empresa'} />
                    </DivLogoStyled>
                    <Holder>
                        <Option link={'#sobre_nos'}>Sobre Nos</Option>
                        <Option link={'#trabalhos'}>Trabalhos</Option>
                        <Option link={'#metodo'}>Metodo</Option>
                        <Option link={'#aliados'}>Aliados</Option>
                        <NavButton/>
                    </Holder>
                </HeaderStyled>
                <IntroImage src={imgIntro} alt={'Banner inicial, foto de casamento'} />
                <article>
                    {/* Section #01 */}
                    <SecNoneBg id='sobre_nos'>
                        <SecTitle>Sobre Nos</SecTitle>
                        <SecTxt>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet aliquet quam ac ultricies. Vivamus mi diam, tincidunt eu mattis non, pulvinar a diam. Vestibulum congue vel risus ut commodo. Donec congue, lacus in malesuada placerat, orci odio pretium velit, id cursus lectus dolor non nisl. Sed consectetur sed erat sed finibus. Etiam vitae velit et quam viverra lobortis. Vestibulum gravida et odio sit amet porta. Quisque aliquet lorem ac nunc consectetur, vitae condimentum quam accumsan. Nam pharetra quam non tortor porta convallis. 
                        
                        </SecTxt>
                    </SecNoneBg>

                    {/* Section #02 */}
                    <SecWithBg id='trabalhos' src={imgArt01} side='right'>
                        <TextContainer>
                            <SecTitle>Trabalhos</SecTitle>
                            <SecTxt>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet aliquet quam ac ultricies. Vivamus mi diam, tincidunt eu mattis non, pulvinar a diam. Vestibulum congue vel risus ut commodo. Donec congue, lacus in malesuada placerat, orci odio pretium velit, id cursus lectus dolor non nisl. Sed consectetur sed erat sed finibus.
                            
                            </SecTxt>
                        </TextContainer>
                    </SecWithBg>
                    
                    {/* Section #03 */}
                    <SecWithBg id='metodo' src={imgArt02} side='left'>
                        <TextContainer>
                            <SecTitle>Metodo</SecTitle>
                            <SecTxt>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet aliquet quam ac ultricies. Vivamus mi diam, tincidunt eu mattis non, pulvinar a diam. Vestibulum congue vel risus ut commodo. Donec congue, lacus in malesuada placerat, orci odio pretium velit, id cursus lectus dolor non nisl. Sed consectetur sed erat sed finibus.
                            
                            </SecTxt>
                        </TextContainer>
                    </SecWithBg>

                    {/* Section #04 */}
                    
                    <SecNoneBg id='aliados'>
                        <SecTitle>Aliados</SecTitle>
                        <SecTxt>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet aliquet quam ac ultricies. Vivamus mi diam, tincidunt eu mattis non, pulvinar a diam. Vestibulum congue vel risus ut commodo. Donec congue, lacus in malesuada placerat, orci odio pretium velit, id cursus lectus dolor non nisl. Sed consectetur sed erat sed finibus. Etiam vitae velit et quam viverra lobortis. Vestibulum gravida et odio sit amet porta. Quisque aliquet lorem ac nunc consectetur, vitae condimentum quam accumsan. Nam pharetra quam non tortor porta convallis. 
                        
                        </SecTxt>
                        <BoxesContainer>
                            <AllyBox facebook='#' instagram='#' name='Jhonson1'/>
                            <AllyBox facebook='#' instagram='#' name='Jhonson2'/>
                            <AllyBox facebook='#' instagram='#' name='Jhonson3'/>
                            
                            <AllyBox facebook='#' instagram='#' name='Jhonson4'/>
                            <AllyBox facebook='#' instagram='#' name='Jhonson5'/>
                            <AllyBox facebook='#' instagram='#' name='Jhonson6'/>
                        </BoxesContainer>
                    </SecNoneBg>
                </article>
                <FooterStyled>
                    <FooterLogo src={logo} alt={'Logo da Empresa'}/>
                    <FooterInfo>
                        <InfoBox>
                            <FooterTitle>Contato</FooterTitle>
                            <FooterLink href='#'>Link01</FooterLink>
                            <FooterLink href='#'>Link02</FooterLink>
                            <FooterLink href='#'>Link03</FooterLink>
                        </InfoBox>
                        <InfoBox>
                            <FooterTitle>Redes Sociais</FooterTitle>
                            <FooterLink href='#'>Link01</FooterLink>
                            <FooterLink href='#'>Link02</FooterLink>
                            <FooterLink href='#'>Link03</FooterLink>
                        </InfoBox>
                    </FooterInfo>
                </FooterStyled>
            </MainStyled>
        </>
    )
}