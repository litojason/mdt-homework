import styled from "styled-components";

import { colors, spacing } from "constants/styles";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${colors.background};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${spacing.base};
`;
export const AuthFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.half};
`;
