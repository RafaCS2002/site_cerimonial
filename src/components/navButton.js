import React from 'react';
import styled from 'styled-components';
import { FaBars, FaRegWindowClose as FaClose } from "react-icons/fa";


const Holder = styled.div`
    width:50%;
    background-color:none;
    display:inline-flex;
    justify-content:space-evenly;
    align-items: end;
    padding-bottom:30px;
    @media (max-width:600px){
        padding-bottom:25px;
    }
    
`

function Option(props) {
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

function ButtonOpc({ children }) {

    if (isOpen === false) {
        icon = FaBars;
    } else {
        icon = FaClose;
    }

    const Bars = styled(icon)`
        @media (min-width:600px){
            display:none;
        }
        width:20px;
        height:auto;
    `
    return (
        <>
            <Bars onClick={() => {
                if (isOpen === false) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
                console.log({ isOpen })
            }} />
            {isOpen===true?(
                <ul>
                    <li link={'#'}>Sobre Nos</li>
                    <li link={'#'}>Trabalhos</li>
                    <li link={'#'}>Metodo</li>
                    <li link={'#'}>Aliados</li>
                </ul>
            ):()}
            
        </>
    )
}


export function NavButton() {
    return (
        <>
            <Holder>
                <Option link={'#'}>Sobre Nos</Option>
                <Option link={'#'}>Trabalhos</Option>
                <Option link={'#'}>Metodo</Option>
                <Option link={'#'}>Aliados</Option>
                <ButtonOpc />
            </Holder>
        </>
    )
}