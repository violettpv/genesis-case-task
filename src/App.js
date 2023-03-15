import "./App.css";
import React from "react";
import CoursePage from "./components/CoursePage";
import { BrowserRouter as Router, 
    Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/course/:id" element={<CoursePage />} />
            </Routes>
        </Router>
    );
}

export default App;
