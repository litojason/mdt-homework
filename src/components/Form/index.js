import styled from "styled-components";

import { borderRadius, borderWidth, colors, spacing } from "constants/styles";

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const Label = styled.label`
  margin-bottom: ${spacing.half};
`;
export const Input = styled.input`
  margin-bottom: ${spacing.base};
  padding: ${spacing.half} ${spacing.base};
  border-radius: ${borderRadius.base};
  border-width: ${borderWidth.thin};

  //   /* :focus {
  //     outline-color: ${colors.primary};
  //   } */
  //
`;
export const Selection = styled.select`
  margin-bottom: ${spacing.base};
  padding: ${spacing.half} ${spacing.base};
  border-radius: ${borderRadius.base};
  border-width: ${borderWidth.thin};
`;
export const TextArea = styled.textarea`
  resize: vertical;
  margin-bottom: ${spacing.base};
  padding: ${spacing.half} ${spacing.base};
  border-radius: ${borderRadius.base};
  border-width: ${borderWidth.thin};
`;
