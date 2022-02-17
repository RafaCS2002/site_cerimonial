import styled from 'styled-components';
// import React from 'react';
import Img from 'next/image';
import mainPageStyle from '../styles/mainPage.module.css'

export const MainStyled = styled.main`
    font-size:1rem;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const HeaderStyled = styled.header`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const NavStyled = styled.nav`
    background-color: none;
`
export const ButtonStyled = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`

export const DivLogoStyled = styled.div`
    background-color:none;
    @media (max-width:600px){
        width:100px;
        margin-left:6%;
    }
    @media (min-width:600px){
        width:175px;
        margin-left:6%;
    }
    height:auto;
    display:flex;
`
export function LogoImgStyled(props) {
    const source = props.src;
    const alt = props.alt;
    return (
        <Img src={source} alt={alt} />
    )
}
// Container das opcoes
export const Holder = styled.div`
    width:50%;
    background-color:none;
    display:inline-flex;
    justify-content:space-evenly;
    align-items: end;
    padding-bottom:30px;
    @media (max-width:600px){
        padding-bottom:25px;
        justify-content:center;
    }
`
// Opcoes listadas para resolucoes maiores
export function Option(props) {
    const txt = props.children;
    const Opc = styled.a`
            display:flex;
            all:unset;
            &:hover{
                color:#4e5965;
            }
            @media (max-width:600px){
                display:none;
            }
    `
    return (
        <>
            <Opc href={props.link}>{txt}</Opc>
        </>
    )
}

export function IntroImage(props) {
    const ImgItSelf = styled.div`
        display:flex;
        height:100%;
        width:100%;
        background:radial-gradient(transparent 50%, black 100%), url(${props.src.src});
        background-repeat: no-repeat;
        background-size: 100%;
        @media (min-width:300px) and (max-width:600px){
            transform:scale(1.4);
            -ms-transform: scale(1.4);
            -moz-transform: scale(1.4);
            -webkit-transform: scale(1.4);
            -o-transform: scale(1.4);
        }
    `
    const ImgContainer = styled.div`
        display:flex;
        height:55vw;
        width:100%;
        overflow: hidden;
        @media (max-width: 400px){
            display:none;
        }
    `
    return (
        <>
            <ImgContainer>
                <ImgItSelf />
            </ImgContainer>
        </>
    )
}

//Section Sem Background
export const SecNoneBg = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    width:100%;
    padding-top:100px;
    padding-bottom:100px;
    padding-right:15%;
    padding-left:15%;
    @media (max-width: 600px) {
        padding-right:5%;
        padding-left:5%;
    }
    @media (max-width: 1000px) {
        padding-top:70px;
        padding-bottom:70px;
    }

`
// Titulo da Section
export const SecTitle = styled.h1`
    display:flex;
    margin:10px;
    font-size:2.2rem;
    @media (max-width: 600px) {
        font-size:1.5rem;
    }
`
// Texto da Section
export const SecTxt = styled.p`
    display:flex;
    margin:10px;
    text-align:center;
    line-height:1.8;
    font-size:1.3rem;
    @media (max-width:300px){
        font-size:5vw;
    }
    @media (min-width:300px) and (max-width: 1000px) {
        font-size:1rem;
    }
`
// Section com Background
export function SecWithBg(props){
    const sideGradient = `to ${props.side}`
    const SecItSelf = styled.section`
        display:flex;
        height:auto;
        color:white;
        width:100%;
        justify-content:${props.side};
        padding-top:50px;
        padding-bottom:50px;
        @media (max-width: 300px) {
            padding-top:10px;
            padding-bottom:10px;
        }
        @media (min-width: 1000px){
            background:linear-gradient(${sideGradient}, transparent 10%, black 95%), url(${props.src.src});
            background-repeat: no-repeat;
            background-size: 100%;
        }
        @media (max-width: 1000px) {
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(to top, transparent -60%, black 150%),url(${props.src.src});
            background-repeat: no-repeat;
            background-size:cover;
        }

    `
    return(
        <>
            <SecItSelf>
                {props.children}
            </SecItSelf>
        </>
    )
}
// Container do Texto para SecWithBg
export const TextContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:20px;
    padding-bottom:20px;
    padding-right:9%;
    padding-left:9%;
    @media (max-width: 600px) {
        width:100%;
        padding-right:none;
        padding-left:none;
    }
    @media (min-width:600px) and (max-width: 1000px) {
        width:80%;
    }

`
