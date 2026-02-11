import { useState, useEffect } from "react";

export const useImages = (): string[] => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Hent JSON med filnavne fra public/images/
        const response = await fetch("/images/images.json");
        const imageFiles: string[] = await response.json();
        const imagePaths = imageFiles.map((file) => `/images/${file}`);
        setImages(imagePaths);
      } catch (err) {
        console.error("Kunne ikke hente billeder:", err);
      }
    };

    fetchImages();
  }, []);

  return images;
};