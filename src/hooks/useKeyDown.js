import React from "react";

const useKeyDown = (keyCode = "", onKeyDown = () => {}) => {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === keyCode) {
        onKeyDown();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keyCode, onKeyDown]);
};

export default useKeyDown;
