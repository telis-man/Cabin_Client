// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledImg, StyledImgContainer } from "./styled/gallery.styled";

const imageContext = require.context(
  "../assets/images",
  false,
  /\.(jpg|jpeg|png)$/
);

export const Gallery = () => {
  const [imgArr, setimgArr] = useState([]);
  const API_ENDPOINT_URL = "http://localhost:3000/gallery";

  useEffect(() => {
    fetch(API_ENDPOINT_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setimgArr(data.images);
        console.log(imgArr);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });

    const images = imageContext.keys().map(imageContext);
    console.log(imageContext);
  }, []);

  return (
    <StyledImgContainer>
      {imgArr.map((image, index) => (
        // <StyledImg key={index} src={image}></StyledImg>
        <img src={image} alt="Example Image"></img>
      ))}

      {/* <img src="http://localhost:3000/images/img.jpg" alt="Example Image"></img>
      <img
        src="http://localhost:3000/images/img (10).jpg"
        alt="Example Image"
      ></img> */}
    </StyledImgContainer>
  );
};

export default Gallery;
