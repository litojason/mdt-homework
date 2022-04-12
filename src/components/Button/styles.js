import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

import { spacing, colors, borderRadius } from "constants/styles";

export const Button = styled.button`
  padding: ${spacing.base};
  background-color: ${colors.primary};
  border: 0;
  color: ${colors.buttonText};
  border-radius: ${borderRadius.base};
  opacity: ${({ loading }) => (loading === "true" ? 0.8 : 1)};
`;

export const LoadingSpinner = styled(AiOutlineLoading)`
  animation: rotation 0.5s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
