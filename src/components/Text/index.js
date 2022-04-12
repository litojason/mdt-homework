import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors, fonts, spacing } from "constants/styles";

export const Text = styled.div`
  ${(props) =>
    props.oneLine
      ? css`
          display: -webkit-box;
          -webkit-line-clamp: 1; /* number of lines to show */
          -webkit-box-orient: vertical;
        `
      : ""}
  font-size: ${(props) => (props.size ? props.size : fonts.size.base)};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  color: ${(props) => props.color};
`;

export const SectionTitle = styled(Text)`
  margin-bottom: ${spacing.half};
`;

export const AuthTitle = styled(Text)`
  font-size: ${fonts.size.title};
  text-align: center;
  margin-bottom: ${spacing.half};
`;

export const TextLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
`;
