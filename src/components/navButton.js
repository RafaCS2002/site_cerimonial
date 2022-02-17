import React from 'react';
import { FaBars, FaRegWindowClose as FaClose } from "react-icons/fa";
import styled from 'styled-components';
import { StyledNavUl, StyledNavLi, Opc } from '../../styles/navButtonStyle'; 

export function NavButton() {
    const [isOpen, setIsOpen] = React.useState(false);
    let icon = null;

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
                if (isOpen) {
                    console.log('eh as barras q tao aparecendo')
                    setIsOpen(false);
                } else {
                    console.log('eh o X q ta aparecendo')
                    setIsOpen(true);
                }
            }} />

            {isOpen && (
                <StyledNavUl>
                    <StyledNavLi>
                        <Opc href='#sobre_nos' onClick={() => setIsOpen(false)}>Sobre Nos</Opc>
                    </StyledNavLi>
                    <StyledNavLi>
                        <Opc href='#trabalhos' onClick={() => setIsOpen(false)}>Trabalhos</Opc>
                    </StyledNavLi>
                    <StyledNavLi>
                        <Opc href='#metodo' onClick={() => setIsOpen(false)}>Metodo</Opc>
                    </StyledNavLi>
                    <StyledNavLi>
                        <Opc href='#' onClick={() => setIsOpen(false)}>Aliados</Opc>
                    </StyledNavLi>
                </StyledNavUl>
            )}

        </>
    )
}
