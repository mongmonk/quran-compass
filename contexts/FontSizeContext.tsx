import React, { createContext, useState, useContext, ReactNode } from 'react';

const FONT_SIZES = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
const DEFAULT_FONT_INDEX = 1;

interface FontSizeContextType {
  fontClass: string;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontIndex, setFontIndex] = useState(DEFAULT_FONT_INDEX);

  const increaseFontSize = () => {
    setFontIndex(prevIndex => Math.min(prevIndex + 1, FONT_SIZES.length - 1));
  };

  const decreaseFontSize = () => {
    setFontIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const resetFontSize = () => {
    setFontIndex(DEFAULT_FONT_INDEX);
  };

  const value = {
    fontClass: FONT_SIZES[fontIndex],
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  };

  return <FontSizeContext.Provider value={value}>{children}</FontSizeContext.Provider>;
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
