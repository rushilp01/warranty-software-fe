import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterMotor from "./RegisterMotor";
import FetchMotor from "./FetchMotor";
import './App.css'; // Custom styles

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <header className="text-center my-4">
                    <h1 className="display-4 text-primary">Warranty Management</h1>
                </header>

                <nav className="mb-4 text-center">
                    <Link className="btn btn-outline-primary mx-2" to="/register">Register Motor</Link>
                    <Link className="btn btn-outline-secondary mx-2" to="/fetch">Fetch Motor</Link>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterMotor />} />
                    <Route path="/fetch" element={<FetchMotor />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
