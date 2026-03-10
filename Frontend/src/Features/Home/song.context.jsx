import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState(null);

  return (
    <SongContext.Provider value={{ loading, song, setSong, setLoading }}>
      {children}
    </SongContext.Provider>
  );
};
