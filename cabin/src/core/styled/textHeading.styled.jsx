import styled from "styled-components";

export const TextHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fonts.primary};
  font-weight: 900;
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;
