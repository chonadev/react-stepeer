import React, { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <DataContext.Provider value={{activeStep, setActiveStep}}>
      { children }  
    </DataContext.Provider>
  )
}