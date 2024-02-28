import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/Global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./screens/About";
import Work from "./screens/Work";
import Services from "./screens/Services";
import Gallery from "./screens/Gallery";
import Contacts from "./screens/Contacts";
import Home from "./screens/Home";
import Nav from "./features/Nav";
import { StyledWrapper } from "./App.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <StyledWrapper>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          {/* <Footer /> */}
        </StyledWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
