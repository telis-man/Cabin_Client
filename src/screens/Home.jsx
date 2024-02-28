// import { Link } from "react-router-dom";
import {
  HeaderContainer,
  PrimaryHeaderText,
  PrimaryHeaderTextContainer,
  SecondaryHeaderText,
} from "./styled/header.styled";
import { useEffect, useState, useRef } from "react";

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <SecondaryHeaderText>
          The new breed of creative production studio
        </SecondaryHeaderText>

        <PrimaryHeaderTextContainer>
          <PrimaryHeaderText>kawasaki</PrimaryHeaderText>
          {/* <p style={{ color: "white", gridRow: 2, alignSelf: "end" }}>Hello</p> */}
        </PrimaryHeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default Home;
