// HoverContext.js
import React, { createContext, useContext, useState } from "react";

const HoverContext = createContext();

export function useHover() {
  return useContext(HoverContext);
}

export function HoverProvider({ children }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const value = {
    hoveredItem,
    setHoveredItem,
  };

  return <HoverContext.Provider value={value}>{children}</HoverContext.Provider>;
}
