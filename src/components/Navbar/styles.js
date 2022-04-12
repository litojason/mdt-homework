import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

import { colors, fonts, icons, shadow, spacing } from "constants/styles";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 3rem;
  padding: ${spacing.base};
  background-color: ${colors.background};
  box-sizing: border-box;
  box-shadow: ${shadow.navbar};
`;

export const Title = styled.div`
  font-size: ${fonts.size.title};
`;

export const BackIcon = styled(AiOutlineLeft).attrs((props) => ({
  size: icons.size.base,
}))``;
