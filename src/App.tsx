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
import Category from './views/screens/student/Category/Category';
import Skills from './views/screens/student/Skills/Skills';
import Skill from './views/screens/student/Skill/Skill';
import CoursesScreen from './views/screens/teacher/courses/CoursesScreen';
import PerformanceScreen from './views/screens/teacher/performance/performanceScreen';
import StudentScreen from './views/screens/teacher/students/StudentScreen';
import FinanceScreen from './views/screens/teacher/finance/financeScreen';
import HelpScreen from './views/screens/teacher/help/HelpScreen';
import Course from './views/screens/student/Course/Course';
import Class from './views/screens/student/Class/Class';
import PersonalDataScreen from './views/screens/teacher/registration/PersonalDataScreen';
import CreateCourse from './views/screens/teacher/courses/CreateCourse';

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
              <Route path="/categories" element={<Category />} />
              <Route path="/categories/:category/skills" element={<Skills />} />

              <Route path="/skills" element={<Skills />} />
              <Route path="/skills/:skill" element={<Skill />} />

              <Route path="/mycourses/:course" element={<Course />} />
              <Route path="/mycourses/:course/class/lessons/:lesson" element={<Class />} />

              {/* Teacher protected Routes */}
              <Route path="/Become-a-Tutor" element={<PersonalDataScreen />} />
              <Route path="/teacher/" element={<CoursesScreen />} />
              <Route path="/teacher/performance" element={<PerformanceScreen />} />
              <Route path="/teacher/students" element={<StudentScreen />} />
              <Route path="/teacher/finance" element={<FinanceScreen />} />
              <Route path="/teacher/help-and-support" element={<HelpScreen />} />
              <Route path="/teacher/create-a-course" element={<CreateCourse />} />
            </Routes>
        </Provider>
      </ThemeProvider>
    </Router>
);
}

export default App;
