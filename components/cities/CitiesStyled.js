import styled from 'styled-components/native';
import { primaryColor, getRandomColor } from './../ui/styles';

export const CityCardWrapper = styled.TouchableOpacity`
  margin-top: 5;
  margin-bottom: 5;
  width: 100%;
  height: 170;

  background-color: ${getRandomColor};

  justify-content: center;
  align-items: center;
`;

export const CityNameWrapper = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: white;
`;