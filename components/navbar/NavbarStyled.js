import styled from 'styled-components/native';
import { primaryColor, navbarBorderColor } from './../ui/styles';


export const NavbarWrapper = styled.View`
  height: 48;
  border-bottom-width: 1;
  border-color: ${navbarBorderColor};
  background-color: #f9f9fb;

  flex-direction: row;
  justify-content: ${props => props.back ? 'space-between' : 'center'};
  align-items: center;

  padding-left: 15;
  padding-right: 15;
`;

export const NavbarTitleWrapper = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: ${primaryColor};
`;