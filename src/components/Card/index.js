import styled, { css } from "styled-components";

import { borderRadius, colors, shadow, spacing } from "constants/styles";

export const Card = styled.div`
  ${(props) =>
    props.center
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      : ""}
  margin-bottom: ${spacing.base};
  padding: ${spacing.base};
  background-color: ${colors.cardBg};
  border-radius: ${borderRadius.base};
  box-shadow: ${shadow.card};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.quarter};
  :last-child {
    margin-bottom: 0;
  }
`;
