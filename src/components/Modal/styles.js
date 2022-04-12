import styled from "styled-components";

import { borderRadius, colors, fonts, shadow, spacing } from "constants/styles";

export const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: ${spacing.base};
  background-color: ${colors.modal};
  box-sizing: border-box;
  z-index: 20;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${spacing.base};
  border-radius: ${borderRadius.base};
  background-color: ${colors.cardBg};
  box-shadow: ${shadow.card};
`;

export const Title = styled.div`
  font-size: ${fonts.size.title};
  font-weight: 600;
`;

export const Description = styled.div`
  margin: ${spacing.half} 0 ${spacing.base} 0;
  text-align: center;
`;
