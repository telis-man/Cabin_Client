import styled from "styled-components";

export const StyledImg = styled.img`
  width: 400px;
  // height: 200px;
  object-fit: cover;
`;

export const StyledImgContainer = styled.div`
  max-width: 820px;
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; /* Adjust the gap as needed */
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
`;
