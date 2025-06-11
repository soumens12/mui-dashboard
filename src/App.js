
import Home from './pages/Home';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Settings from './pages/Settings';
import Shorts from './pages/Shorts';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './Components/theme';
import { createContext, useContext, useMemo, useState } from 'react';


const ColorModeContext = createContext({ toggleColorMode: () => { } });
export const useColorMode = () => useContext(ColorModeContext);

function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
              <Route path='/shorts' element={<Shorts />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
