import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-right: 50px;
  padding-top: 10px;
`;

export const StyledLi = styled.li`
  padding: 0;
  list-style: none;
  color: ${(props) => props.theme.colors.text};
  //   border: 1px solid blue;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
