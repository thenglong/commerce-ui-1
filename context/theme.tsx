import * as React from "react";

const ThemeStateContext = React.createContext<any>({});
const ThemeDispatchContext = React.createContext<any>({});

const initialState = null;

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState(initialState);

  return (
    <ThemeDispatchContext.Provider value={setTheme}>
      <ThemeStateContext.Provider value={theme}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

export const useThemeState = () => React.useContext(ThemeStateContext);
export const useThemeDispatch = () => React.useContext(ThemeDispatchContext);
