import styled from 'styled-components';

export const ParagraphElement = styled.p`
font-size: 14px;
font-weight: 600;
color: ${(props) => props.tabcolorvalue? "red" : "#373737"};
margin-left : 20px;
cursor: pointer;
`