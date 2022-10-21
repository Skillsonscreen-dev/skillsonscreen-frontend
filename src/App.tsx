import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './views/screens/home/HomeScreen';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import SignupScreen from './views/screens/auth/signup/SignupScreen';

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </ThemeProvider>
    </Router>
);
}

export default App;
