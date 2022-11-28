import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './views/screens/home/HomeScreen';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import SignupScreen from './views/screens/auth/signup/SignupScreen';
import { Provider } from "react-redux";
import { store } from './config/store';
import StudentHome from './views/screens/student/Home/StudentHome';

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />

              {/* Student protected Routes */}
              <Route path="/home" element={<StudentHome />} />
            </Routes>
        </Provider>
      </ThemeProvider>
    </Router>
);
}

export default App;
