import styled from 'styled-components';
// import React from 'react';
import Img from 'next/image';
import mainPageStyle from '../styles/mainPage.module.css'

export const MainStyled = styled.main`
    background-color: black;
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
export function LogoImgStyled(props){
    const source = props.src;
    const alt = props.alt;
    return(
        <Img src={source} alt={alt}/>
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