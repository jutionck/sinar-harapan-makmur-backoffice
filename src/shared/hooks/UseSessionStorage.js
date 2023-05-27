import { useState } from "react";

export const useSessionStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = sessionStorage.getItem(keyName);
      if (value) {
        return value;
      } else {
        if (defaultValue != null) {
          sessionStorage.setItem(keyName, defaultValue);
        }
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      if (newValue === null) {
        sessionStorage.removeItem(keyName);
        return;
      }
      sessionStorage.setItem(keyName, newValue);
      setStoredValue(newValue);
    } catch (err) {
      throw new Error(err);
    }
  };
  return [storedValue, setValue];
};
