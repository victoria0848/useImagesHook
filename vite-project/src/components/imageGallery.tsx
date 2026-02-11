import React from "react";
import { useImages } from "../hooks/useImages";

const ImageGallery: React.FC = () => {
  const images = useImages();

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`} width={150} />
      ))}
    </div>
  );
};

export default ImageGallery;