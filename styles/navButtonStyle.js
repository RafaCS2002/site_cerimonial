import styled from 'styled-components';

export const StyledNavUl = styled.ul`
position:absolute;
z-index:5;
top:11%;
right:0%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:white;
padding-top:10px;
padding-bottom:10px;
@media (min-width: 600px){
    display:none;
}
`
export const StyledNavLi = styled.li`
display:block;
margin-top:10px;
margin-bottom:10px;
`
export const Opc = styled.a`
display:flex;
all:unset;
&:hover{
    color:#4e5965;
}
`