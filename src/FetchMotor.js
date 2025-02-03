import React, { useState } from "react";
import axios from "axios";
import './FetchMotor.css';

function FetchMotor() {
    const [serial, setSerial] = useState("");
    const [party, setParty] = useState("");
    const [motors, setMotors] = useState([]);

    const handleSearch = async () => {
        try {
            // Construct the API URL with query parameters
            let apiUrl = `http://localhost:8080/fetch?`;

            // Add query parameters based on available input
            if (serial) {
                apiUrl += `serial_no=${serial}`;
            }
            if (party) {
                if (serial) {
                    apiUrl += `&`;
                }
                apiUrl += `party_name=${party}`;
            }

            // Fetch data from the backend
            const res = await axios.get(apiUrl);
            setMotors(res.data);
        } catch (error) {
            setMotors([]);
            alert("No motors found or an error occurred.");
        }
    };

    return (
        <div className="fetch-container">
            <h2>Fetch Motor Details</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Serial No"
                    className="form-control mr-3"
                    onChange={(e) => setSerial(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Party Name"
                    className="form-control mr-3"
                    onChange={(e) => setParty(e.target.value)}
                />
                <button onClick={handleSearch} className="btn btn-secondary">Search</button>
            </div>

            {motors.length > 0 ? (
                <div className="motor-cards-container">
                    {motors.map((motor, index) => (
                        <div key={index} className="motor-card">
                            <h5 className="motor-card-title">{motor.motor_model} (Serial: {motor.serial_no})</h5>
                            <p><strong>RPM:</strong> {motor.rpm}</p>
                            <p><strong>Phase:</strong> {motor.phase}</p>
                            <p><strong>Party Name:</strong> {motor.party_name}</p>
                            <p><strong>Dispatch Date:</strong> {motor.dispatch_date}</p>
                            <p><strong>Transport Agency:</strong> {motor.transport_agency}</p>
                            <p><strong>LR/E-Way Bill:</strong> {motor.lr_eway_bill}</p>
                            <p><strong>Test Certificate:</strong> {motor.test_certificate}</p>
                            <p><strong>Party Address:</strong> {motor.party_address}</p>
                            <p><strong>HP/Kw:</strong> {motor.hp_kw}</p>
                            <p><strong>Remarks:</strong> {motor.remarks}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No motors found</p>
            )}
        </div>
    );
}

export default FetchMotor;
