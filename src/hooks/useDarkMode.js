import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (initialValue) => {


  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  useEffect(() => {
    if (initialValue === true) {
      document.querySelector("body").classList.add("dark-mode");

    } else {
      document.querySelector("body").classList.remove("dark-mode");

    }
  }, [initialValue]);

  return [darkMode, setDarkMode];

};

export default useDarkMode;
