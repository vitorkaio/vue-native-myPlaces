import styled from 'styled-components/native';
import { primaryColor } from './../../components/ui/styles'

export const HomeWrapper = styled.View`
  justify-content: flex-start;
`;

export const HomeEmptyWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HomeContentWrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  position: relative;
`;

export const ButtonMapWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 20;
  bottom: 25;

  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};

  width: 60;
  height: 60;
  border-width: 1;
  border-radius: 50;
  border-color: transparent;
`;