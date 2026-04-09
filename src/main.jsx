import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import { Home, Experience, Projects, Contact } from './pages';
import { Layout } from "./components";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);