import React, { useState } from "react";
import './RegisterMotor.css';  // Import the CSS file for styling

const RegisterMotor = () => {
    const [motorDetails, setMotorDetails] = useState({
        motorModel: "",
        rpm: "",
        phase: "",
        partyName: "",
        dispatchDate: "",
        transportAgency: "",
        lrEwayBill: "",
        testCertificate: "",
        partyAddress: "",
        serialNo: "",
        hpKw: "",
        remarks: "",
    });

    const handleChange = (e) => {
        setMotorDetails({
            ...motorDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };

    return (
        <div className="register-motor-container">
            <div className="form-wrapper">
                <h2 className="form-title">Register Motor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Motor Model</label>
                        <input
                            type="text"
                            name="motorModel"
                            value={motorDetails.motorModel}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>RPM</label>
                        <input
                            type="text"
                            name="rpm"
                            value={motorDetails.rpm}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phase</label>
                        <input
                            type="text"
                            name="phase"
                            value={motorDetails.phase}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Party Name</label>
                        <input
                            type="text"
                            name="partyName"
                            value={motorDetails.partyName}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Dispatch Date</label>
                        <input
                            type="date"
                            name="dispatchDate"
                            value={motorDetails.dispatchDate}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Transport Agency</label>
                        <input
                            type="text"
                            name="transportAgency"
                            value={motorDetails.transportAgency}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>LR / E-way Bill</label>
                        <input
                            type="file"
                            name="lrEwayBill"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Test Certificate</label>
                        <input
                            type="file"
                            name="testCertificate"
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Party Address</label>
                        <input
                            type="text"
                            name="partyAddress"
                            value={motorDetails.partyAddress}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Serial Number</label>
                        <input
                            type="text"
                            name="serialNo"
                            value={motorDetails.serialNo}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>HP / Kw</label>
                        <input
                            type="text"
                            name="hpKw"
                            value={motorDetails.hpKw}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Remarks</label>
                        <input
                            type="text"
                            name="remarks"
                            value={motorDetails.remarks}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <button type="submit" className="submit-btn">Register Motor</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterMotor;
