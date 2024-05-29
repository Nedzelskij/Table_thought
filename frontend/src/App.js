import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AuthProvider from "./components/AuthProvider";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
