import { useState } from "react";

export default function useService(images: string[]) {
  const [currentImg, setCurrentImg] = useState<number>(0);

  function handlePrev() {
    setCurrentImg((prevIndex) => {
      if (prevIndex <= 0) {
        return images.length - 1;
      }

      return (prevIndex -= 1);
    });
  }

  function handleNext() {
    setCurrentImg((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }

      return (prevIndex += 1);
    });
  }

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return {
    currentImg,
    handleNext,
    handlePrev,
    toBase64,
  };
}
