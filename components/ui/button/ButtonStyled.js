import styled from 'styled-components/native';
import { primaryColor } from './../styles';

export const ButtonWrapper = styled.TouchableOpacity`
  border-width: 1;
  border-color: ${primaryColor};
  background-color: ${primaryColor};
  border-radius: 2;

  width: ${props => props.width};
  height: ${props => props.height};

  justify-content: center;
  align-items: center;
`;

export const TitleButtonWrapper = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: white;
`;