import styled from 'styled-components';
// import React from 'react';
import Img from 'next/image';
import mainPageStyle from '../styles/mainPage.module.css'
import {IconContext} from "react-icons";
import { AiFillFacebook as IconFb, AiOutlineInstagram as IconIg } from "react-icons/ai";

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
export const BoxesContainer = styled.div`
    width:95%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin-top:50px;
    flex-wrap:wrap;
`
export function AllyBox({facebook, instagram, name}){
    const BoxItSelf = styled.div`
        width:33%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:30px;
        flex-direction:column;
        @media (max-width: 400px) {
            width:100%;
        }
        @media (min-width: 400px) and (max-width:800px) {
            width:50%;
        }
    `
    const IconsHolder = styled.div`
        display:flex;
        height:30px;
        width:100%;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `
    return(
        <>
            <BoxItSelf>
                <h1>{name}</h1>
                <IconsHolder>
                    <IconContext.Provider value={{size:25}}>
                        <IconFb onClick={()=>{location.href=`${facebook}`}}/>
                        <IconIg onClick={()=>{location.href=`${instagram}`}}/>
                    </IconContext.Provider>
                </IconsHolder>
            </BoxItSelf>
        </>
    )
}

export const FooterStyled = styled.footer`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    @media (max-width: 400px) {
        flex-direction:column;
    }
`

export function FooterLogo({src, alt}){
    const FlItSelf = styled.div`
        width:50%;
        display:flex;
        align-items:center;
        justify-content:center;
    `
    const LogoItSelf = styled.div`
        width:30%;
        display:flex;
        filter:invert(100%);
        @media (max-width: 700px) {
            width:130px;
        }
    `
    return(
        <>
            <FlItSelf>
                <LogoItSelf>
                    <Img src={src} alt={alt} />
                </LogoItSelf>
            </FlItSelf>
        </>
    )
}
export const FooterInfo = styled.div`
    width:50%;
    display:flex;
    flex-wrap:wrap;
`
export const InfoBox = styled.div`
    width:50%;
    display:flex;
    color:white;
    flex-direction:column;
    padding-right:30px;
    @media (min-width: 400px) and (max-width: 800px) {
        width:100%;
        padding-right:40%;
    }
    @media (max-width: 400px) {
        width:100%;
        justify-content:center;
        align-items:center;
        padding-right:0px;
    }
`
export const FooterTitle = styled.h1`
    display:flex;
    font-size:1.1rem;
    justify-content:right;
    margin-bottom:15px;
`
export function FooterLink(props){
    const LinkItSelf = styled.a`
        all:unset;
        justify-content:right;
        display:flex;
        font-size:.9rem;
        width:100%;
        margin-bottom:10px;
        @media (max-width: 400px) {
            justify-content:center;
            align-items:center;
        }
    `
    return(
        <>
            <LinkItSelf href={props.href}>
                {props.children}
            </LinkItSelf>
        </>
    )
}
