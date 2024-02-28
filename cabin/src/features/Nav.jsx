import { StyledLi, StyledLink, StyledUl } from "./styled/Nav.style";

export const Nav = () => {
  return (
    <StyledUl>
      <StyledLi>
        <StyledLink to="/">Home</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/about">About us</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/work">Work</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/services">Services</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/gallery">Gallery</StyledLink>
      </StyledLi>
    </StyledUl>
  );
};

export default Nav;
