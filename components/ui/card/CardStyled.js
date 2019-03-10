import styled from 'styled-components/native';
import { pagesColor, primaryColor, navbarBorderColor } from './../styles';

export const PrimaryColor = primaryColor;

export const CardWrapper = styled.View`
  position: absolute;
  z-index: 99;
  top: 15;

  width: 95%;
  height: 50;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${pagesColor};

  border-width: 1;
  border-color: ${navbarBorderColor};
  
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 5;
  padding-right: 5;

`;

export const CityWrapper = styled.TextInput`
  width: 80%; 
  height: 40;

  padding-top: 5;
  padding-bottom: 5;
  padding-left: 5;
  padding-right: 5;

  border-right-width: 1;
  border-color: ${navbarBorderColor};
`;

export const IconWrapper = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;