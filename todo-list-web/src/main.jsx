import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './styles/index.css';
import LoginPage from './pages/LoginPage.jsx';
import TasksPage from './pages/TasksPage.jsx';

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <TasksPage />
            </RequireAuth>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
